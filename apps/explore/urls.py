from django.conf.urls import patterns, include, url

from rest_framework import viewsets, routers
from rest_framework.response import Response
from rest_framework import generics

from explore import serializers as explore_serializers
from quran import models as quran_models


class SurasListViewSet(viewsets.ModelViewSet):
    model = quran_models.Sura


class SuraAyasListView(generics.ListAPIView):
    serializer_class = explore_serializers.AyaSerializer

    def get_queryset(self):
        sura_pk = int(self.kwargs['sura_pk'])
        queryset = quran_models.Sura.objects.get(pk=sura_pk).ayas.all()
        return queryset


class AyaViewSet(viewsets.ModelViewSet):
    model = quran_models.Aya


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'sura', SurasListViewSet)
# router.register(r'suraayas', SuraAyasListViewSet)
router.register(r'aya', AyaViewSet)


urlpatterns = patterns('',
    url(r'^suraayas/(?P<sura_pk>\d+)', SuraAyasListView.as_view()),
    url(r'^', include(router.urls)),
)
