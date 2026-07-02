from rest_framework import serializers

from .models import Inquiry


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = [
            "id",
            "name",
            "company",
            "email",
            "phone",
            "product_interest",
            "quantity",
            "application",
            "message",
            "status",
            "created_at",
            "updated_at",
            "admin_note",
        ]
        read_only_fields = ["id", "status", "created_at", "updated_at", "admin_note"]
