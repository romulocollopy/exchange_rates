from django.db import models


class DailyExchangeRate(models.Model):
    """
    Stores a daily exchange rate from dolars to BRL, ARS and EUR
    """
    date = models.DateField()
    timestamp = models.IntegerField()
    brl = models.FloatField()
    ars = models.FloatField()
    eur = models.FloatField()
