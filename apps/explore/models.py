from quran import models as quran_models


class MyAya(quran_models.Aya):
    class Meta:
        proxy = True
