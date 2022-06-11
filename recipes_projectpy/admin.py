from django.contrib import admin
from recipes_projectpy.models import DetailsModel

class DetailsAdmin(admin.ModelAdmin):
    pass

admin.site.register(DetailsModel, DetailsAdmin)