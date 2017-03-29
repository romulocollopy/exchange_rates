import datetime

from django.test import TestCase
from django.db import IntegrityError

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

    def test_date_is_unique(self):
        date = '2017-01-03'
        mommy.make(DailyExchangeRate, date=date)
        with self.assertRaises(IntegrityError):
            mommy.make(DailyExchangeRate, date=date)
