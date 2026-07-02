from rest_framework.routers import DefaultRouter

from .views import ApplicationExampleViewSet

router = DefaultRouter()
router.register("", ApplicationExampleViewSet, basename="application-example")

urlpatterns = router.urls
