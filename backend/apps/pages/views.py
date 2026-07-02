from rest_framework import viewsets

from .models import ApplicationExample
from .serializers import ApplicationExampleSerializer


class ApplicationExampleViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ApplicationExampleSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return ApplicationExample.objects.filter(is_public=True).prefetch_related("related_products")
