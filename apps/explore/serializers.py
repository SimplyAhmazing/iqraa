from rest_framework import serializers

from quran import models as quran_models


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = quran_models.Word

class AyaSerializer(serializers.ModelSerializer):
    class Meta:
        model = quran_models.Aya

