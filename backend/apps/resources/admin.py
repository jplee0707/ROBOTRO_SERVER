from django.contrib import admin

from .models import Resource


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ("title", "product", "category", "version", "published_at", "is_public", "order")
    list_filter = ("category", "product", "is_public")
    search_fields = ("title", "product", "description")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("order", "-published_at", "title")
    fieldsets = (
        (None, {"fields": ("title", "slug", "product", "category", "description")}),
        ("File", {"fields": ("version", "file", "external_url", "published_at")}),
        ("Publishing", {"fields": ("is_public", "order")}),
    )
