from django.urls import path
from . views import *




API_TITLE = 'ScoutVendor API'
API_DESCRIPTION = 'A Web API for Price Compare.'

urlpatterns = [
    path('product/', ProductAPIView.as_view()),
    path('review/', ReviewAPIView.as_view()),

]