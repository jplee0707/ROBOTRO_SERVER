from rest_framework import serializers

from .models import Resource


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            "id",
            "title",
            "slug",
            "product",
            "category",
            "description",
            "version",
            "file",
            "external_url",
            "published_at",
            "is_public",
            "order",
        ]
