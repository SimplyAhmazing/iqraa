from rest_framework import serializers

from quran import models as quran_models
from explore import models as explore_models


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = quran_models.Word

class AyaSerializer(serializers.ModelSerializer):
    # words = serializers.RelatedField(many=True)
    # words = serializers.Field(source='get_words')
    words = serializers.SerializerMethodField('get_words')

    class Meta:
        model = explore_models.MyAya

    def get_words(self, aya):
        words = []
        for word in aya.words.all():
            try:
                root_occurences = word.root.ayas.distinct().count()
                lemma_occurences = word.lemma.ayas.distinct().count()
            except:
                root_occurences = 0
                lemma_occurences = 0

            words.append({
                'id': word.id,
                'token': word.token,
                'lemma': word.lemma,
                'root': word.root,
                'root_occurences': root_occurences,
                'lemma_occurences': lemma_occurences
            })
        return words

    def get_related_field(self, model_field, related_model, to_many):
        return super().get_related_field(model_field, related_model, to_many)

