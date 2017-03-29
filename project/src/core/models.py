from django.db import models


class DailyExchangeRate(models.Model):
    """
    Stores a daily exchange rate from dolars to BRL, ARS and EUR
    """
    date = models.DateField(unique=True)
    timestamp = models.IntegerField()
    brl = models.FloatField()
    ars = models.FloatField()
    eur = models.FloatField()

    class Meta:
        ordering = 'date',
