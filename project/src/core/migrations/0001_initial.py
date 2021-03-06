# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 19:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DailyExchangeRate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(unique=True)),
                ('timestamp', models.IntegerField()),
                ('brl', models.FloatField()),
                ('ars', models.FloatField()),
                ('eur', models.FloatField()),
            ],
        ),
    ]
