from rest_framework import serializers
from recipes_projectpy.models import DetailsModel


class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailsModel
        fields = "__all__"
