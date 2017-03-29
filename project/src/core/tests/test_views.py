import datetime

from django.core.urlresolvers import reverse

import mock
from rest_framework.test import APITestCase
from rest_framework import status

class HomeViewTest(APITestCase):

    def setUp(self):
        self.url = reverse('core:home')

    def test_home_200(self):
        resp = self.client.get(self.url)
        self.assertEqual(status.HTTP_200_OK, resp.status_code)

    def test_home_template_is_used(self):
        resp = self.client.get(self.url)
        self.assertTemplateUsed(resp, 'core/home.html')

    def test_static_is_loaded(self):
        resp = self.client.get(self.url)
        self.assertContains(resp, 'static/js/main.js')


class APIView(APITestCase):

    def setUp(self):
        self.url = reverse('core:api')

    @mock.patch('src.core.views.DAO.get_rates_interval', mock.MagicMock())
    def test_api_200(self):
        resp = self.client.get(self.url)
        self.assertEqual(status.HTTP_200_OK, resp.status_code)

    @mock.patch('src.core.views.DAO.get_rates_interval')
    def test_api_calls_DAO_with_dates(self, mock_get_rates):
        today = datetime.date.today()
        start_date = today - datetime.timedelta(days=7)
        end_date = today
        resp = self.client.get(self.url)
        mock_get_rates.assert_called_once_with(
            start_date=start_date,
            end_date=end_date
        )
