from django.test import TestCase
from model_mommy import mommy

from src.core.models import DailyExchangeRate
from ..serializers import DailyExchangeRateSerializer


class DailyExchangeRateSerializerTest(TestCase):

    def setUp(self):
        self.der = mommy.make(DailyExchangeRate)

    def test_serializer(self):
        serializer = DailyExchangeRateSerializer(self.der)
        self.assertIsInstance(serializer.data, dict)
        self.assertEqual(
            ['id', 'date', 'timestamp', 'brl', 'ars', 'eur'],
            list(serializer.data.keys())
        )
