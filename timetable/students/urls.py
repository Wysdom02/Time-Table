from rest_framework import routers, urlpatterns
from .api import StudentViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentViewSet,'students')

urlpatterns = router.urls
