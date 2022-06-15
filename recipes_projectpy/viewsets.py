from django.forms import modelformset_factory
from rest_framework import viewsets
from . import models
from . import serialize

class RecipesViewset(viewsets.ModelViewSet):
    queryset = models.DetailsModel.objects.all()
    serializer_class = serialize.DetailsSerializer

