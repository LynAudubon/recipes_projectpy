from recipes_projectpy.viewsets import RecipesViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('recipes',RecipesViewset)
