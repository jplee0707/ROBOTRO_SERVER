from rest_framework import viewsets

from .models import Resource
from .serializers import ResourceSerializer


class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ResourceSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Resource.objects.filter(is_public=True)
