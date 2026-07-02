from rest_framework import serializers

from .models import ApplicationExample


class ApplicationExampleSerializer(serializers.ModelSerializer):
    related_products = serializers.StringRelatedField(many=True)

    class Meta:
        model = ApplicationExample
        fields = [
            "id",
            "title",
            "slug",
            "category",
            "description",
            "image",
            "related_products",
            "order",
            "is_public",
        ]
