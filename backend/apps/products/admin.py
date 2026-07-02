from django.contrib import admin

from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "is_featured", "order", "updated_at")
    list_filter = ("category", "is_featured")
    search_fields = ("name", "short_description", "description")
    prepopulated_fields = {"slug": ("name",)}
    ordering = ("order", "name")
    fieldsets = (
        (None, {"fields": ("name", "slug", "category", "short_description", "description")}),
        ("Product Details", {"fields": ("key_features", "specifications", "main_image")}),
        ("Publishing", {"fields": ("is_featured", "order")}),
    )
