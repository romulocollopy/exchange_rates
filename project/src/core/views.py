import datetime

from django.views.generic import TemplateView
from rest_framework.generics import ListAPIView

from .models import DailyExchangeRate
from .serializers import DailyExchangeRateSerializer
from .dao import DAO

class HomeView(TemplateView):
    template_name = 'core/home.html'


class APIView(ListAPIView):
    serializer_class = DailyExchangeRateSerializer

    def get_queryset(self):
        today = datetime.date.today()
        start_date = today - datetime.timedelta(days=7)
        end_date = today

        rates_list = DAO.get_rates_interval(start_date=start_date,
                               end_date=end_date)
        return rates_list
