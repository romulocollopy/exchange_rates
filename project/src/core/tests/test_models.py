import datetime
from django.test import TestCase
from model_mommy import mommy

from src.core.models import DailyExchangeRate


class DailyExchangeRateTest(TestCase):

    def test_is_created(self):
        mommy.make(DailyExchangeRate, id=42)
        der = DailyExchangeRate.objects.get()
        self.assertEqual(42, der.id)


    def test_fields(self):
        der = mommy.make(DailyExchangeRate, id=42)
        self.assertIsInstance(der.date, datetime.date)
        self.assertIsInstance(der.timestamp, int)
        self.assertIsInstance(der.brl, float)
        self.assertIsInstance(der.ars, float)
        self.assertIsInstance(der.eur, float)
