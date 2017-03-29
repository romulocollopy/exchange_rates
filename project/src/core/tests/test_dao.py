import mock
import datetime

from django.test import TestCase
from django.conf import settings

import vcr
from model_mommy import mommy

from src.core.models import DailyExchangeRate
from src.core.dao import DAO

EXPECTED_CALLED_RAW_URLS = [
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-02',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-03',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-06',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-07',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-05',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-01',
    'http://apilayer.net/api/historical?access_key={}&currencies=BRL,ARS,EUR&date=2017-03-04'
]

EXPECTED_CALLED_URLS = [s.format(settings.CURRENCYLAYER_API_KEY)
                        for s in EXPECTED_CALLED_RAW_URLS]

class DAOTest(TestCase):

    def setUp(self):
        self.date_args = datetime.date(2017, 3, 1), datetime.date(2017, 3, 7)

    @mock.patch('src.core.dao.DailyExchangeRate.objects.filter')
    def test_retrive_from_db_returns_model_filter(self, mock_model_filter):
        mock_qs = mock.MagicMock()
        mock_model_filter.return_value = mock_qs
        rates = DAO.get_rates_interval_from_db(*self.date_args)
        self.assertEqual(rates, mock_qs)
        mock_model_filter.assert_called_once_with(date__gte=self.date_args[0],
                                                  date__lte=self.date_args[1])

    @mock.patch.object(DAO, 'get_from_currencylayer')
    @mock.patch.object(DAO, 'get_rates_interval_from_db')
    def test_retrive_calls_retrieve_from_db(self, mock_retrieve_from_db, mock_api_call):
        rates = DAO.get_rates_interval(*self.date_args)
        mock_retrieve_from_db.assert_called_once_with(*self.date_args)

    @mock.patch.object(DAO, 'get_from_currencylayer')
    @mock.patch.object(DAO, 'retrieve_missing_from_api')
    @mock.patch.object(DAO, 'get_rates_interval_from_db')
    def test_retrive_calls_retrivie_missing_if_days_not_in_db(
        self,
        mock_retrieve_from_db,
        mock_retrieve_from_api,
        mock_api_call
    ):
        date_args = datetime.date(2017, 3, 1), datetime.date(2017, 3, 7)
        DAO.get_rates_interval(*self.date_args)
        mock_retrieve_from_api.assert_called_once_with(
            mock_retrieve_from_db(),
            *date_args
        )

    @mock.patch.object(DAO, 'retrieve_missing_from_api')
    @mock.patch.object(DAO, 'get_rates_interval_from_db')
    def test_retrive_doesnt_call_retrivie_missing_if_all_days_in_db(
        self,
        mock_retrieve_from_db,
        mock_retrieve_from_api
    ):
        mock_retrieve_from_db.return_value.__len__.return_value = 7
        DAO.get_rates_interval(*self.date_args)
        mock_retrieve_from_api.assert_not_called()


    @mock.patch.object(DAO, 'get_from_currencylayer')
    @mock.patch.object(DAO, '_get_missing_dates')
    def test_retrieve_from_api_calls_currentlayer_with_missing_dates(
        self,
        mock_missing_dates,
        mock_get_currencylayer
    ):
        db_dates = []
        DAO.retrieve_missing_from_api(db_dates, *self.date_args)
        mock_missing_dates.assert_called_once_with(db_dates, *self.date_args)
        mock_get_currencylayer.assert_called_once_with(mock_missing_dates())

    @mock.patch('src.core.models.DailyExchangeRate.objects.bulk_create')
    @mock.patch('src.core.dao.grequests.map')
    @mock.patch('src.core.dao.grequests.get')
    def test_get_responses_calls_grequests_get(self, mock_grequests_get,
                                                   mock_grequests_map,
                                                   mock_bulk_create):
        missing_dates = DAO._get_missing_dates([], *self.date_args)
        calls = []
        for url in EXPECTED_CALLED_URLS:
            calls.append(mock.call(url))

        DAO._get_responses(missing_dates)
        mock_grequests_get.assert_has_calls(calls, any_order=True)

    @mock.patch.object(DAO, '_get_responses')
    @mock.patch('src.core.dao.DailyExchangeRate')
    def test_get_currencylayer_saves_objects(self, mock_DER,
                                             mock_get_responses):
        mock_response = mock.Mock()
        mock_response.json.return_value = {
            "success": True,
            "terms":"https:\/\/currencylayer.com\/terms",
            "privacy":"https:\/\/currencylayer.com\/privacy",
            "historical": True,
            "date":"2017-03-27",
            "timestamp":1490659199,
            "source":"USD",
            "quotes":{
                "USDBRL":3.1259,
                "USDARS":15.564049,
                "USDEUR":0.920505
            }
        }
        DER = mock.Mock()
        mock_DER.return_value = DER
        mock_get_responses.return_value = [mock_response]
        missing_dates = DAO._get_missing_dates([], *self.date_args)
        DAO.get_from_currencylayer(missing_dates)
        mock_DER.objects.bulk_create.assert_called_once_with([DER])

    def test_DAO_integration(self):
        """
        Testing integration by creating a missing rates in the databaase
        and fetching the remaining 1 in CurrencyLayer API
        """

        dates = [
            datetime.date(2017, 3, 7) - datetime.timedelta(days=n)
            for n in range(7 - 1)
        ]
        for date in dates:
            mommy.make(DailyExchangeRate,
                       date=date)

        with vcr.use_cassette('fixtures/vcr_cassettes/currencylayer.yalm'):
            rates = DAO.get_rates_interval(*self.date_args)
        self.assertEqual(7, len(rates))
