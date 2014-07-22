from django.conf.urls import patterns, include, url

from quran import models as quran_models
from rest_framework import viewsets, routers

from main import views

urlpatterns = patterns('',
    url(r'^$', views.MainView.as_view()),
)
