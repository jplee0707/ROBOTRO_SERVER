from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "category",
            "short_description",
            "description",
            "key_features",
            "specifications",
            "main_image",
            "is_featured",
            "order",
            "created_at",
            "updated_at",
        ]
