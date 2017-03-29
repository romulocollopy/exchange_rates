from rest_framework import serializers
from src.core.models import DailyExchangeRate


class DailyExchangeRateSerializer(serializers.ModelSerializer):

    class Meta:
        model = DailyExchangeRate
        fields = '__all__'
