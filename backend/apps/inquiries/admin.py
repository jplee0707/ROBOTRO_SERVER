from django.contrib import admin

from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "company", "email", "product_interest", "status", "created_at")
    list_filter = ("product_interest", "status", "created_at")
    search_fields = ("name", "company", "email", "phone", "message")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("-created_at",)
    fieldsets = (
        ("Customer", {"fields": ("name", "company", "email", "phone")}),
        ("Request", {"fields": ("product_interest", "quantity", "application", "message")}),
        ("Admin", {"fields": ("status", "admin_note", "created_at", "updated_at")}),
    )
