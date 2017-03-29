import datetime
from itertools import chain

from django.conf import settings
import grequests

from .models import DailyExchangeRate

CURRENCIES = ['BRL', 'ARS', 'EUR']

CURRENCY_LAYER_BASE = (
    'http://apilayer.net/api/historical'
    '?access_key={}'
    '&currencies={}'
).format(
    settings.CURRENCYLAYER_API_KEY,
    ','.join(CURRENCIES)
)


class DAO(object):

    @classmethod
    def get_rates_interval(cls, start_date, end_date):
        number_of_days = cls._get_number_of_days(start_date, end_date)
        db_rates = cls.get_rates_interval_from_db(start_date, end_date)

        if len(db_rates) == number_of_days:
            return db_rates
        api_rates = cls.retrieve_missing_from_api(db_rates, start_date, end_date)
        return sorted(chain(db_rates, api_rates), key=lambda x: x.date)


    def get_rates_interval_from_db(start_date, end_date):
        return DailyExchangeRate.objects.filter(
            date__gte=start_date,
            date__lte=end_date
        )

    @classmethod
    def retrieve_missing_from_api(cls, db_rates, start_date, end_date):
        missing_dates = cls._get_missing_dates(db_rates, start_date, end_date)
        objs = cls.get_from_currencylayer(missing_dates)
        return objs

    @classmethod
    def _get_missing_dates(cls, db_rates, start_date, end_date):
        date_delta = cls._get_number_of_days(start_date, end_date)
        all_dates = set([
            start_date + datetime.timedelta(days=n)
            for n in range(date_delta)
        ])
        db_dates = set([rate.date for rate in db_rates])
        return all_dates - db_dates

    @classmethod
    def get_from_currencylayer(cls, missing_dates):
        responses = cls._get_responses(missing_dates)
        daily_exchange_rates = []
        for r in responses:
            data = r.json()
            der = DailyExchangeRate(
                date=datetime.date(*[int(i) for i in data['date'].split('-')]),
                timestamp=data['timestamp'],
                brl=data['quotes']['USDBRL'],
                ars=data['quotes']['USDARS'],
                eur=data['quotes']['USDEUR'],
            )
            daily_exchange_rates.append(der)
        qs = DailyExchangeRate.objects.bulk_create(daily_exchange_rates)
        return qs

    def _get_responses(missing_dates):
        request_set = [
            grequests.get("{}&date={:%Y-%m-%d}".format(CURRENCY_LAYER_BASE, date))
            for date in missing_dates
        ]
        return grequests.map(request_set)

    def _get_number_of_days(start_date, end_date):
        return (end_date - start_date).days + 1
