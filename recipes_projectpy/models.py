from django.db import models


class DetailsModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ingredients = models.CharField(max_length=5000)
    instructions = models.CharField(max_length=5000)
    serving_size = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    notes = models.CharField(max_length=500)
    date_added = models.CharField(max_length=100)
    date_modified = models.CharField(max_length=100)

    def __str__(self):
        return self.name or ''
