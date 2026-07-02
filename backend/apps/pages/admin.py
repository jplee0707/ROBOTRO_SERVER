from django.contrib import admin

from .models import ApplicationExample


@admin.register(ApplicationExample)
class ApplicationExampleAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "order", "is_public")
    list_filter = ("category", "is_public")
    search_fields = ("title", "description")
    prepopulated_fields = {"slug": ("title",)}
    filter_horizontal = ("related_products",)
    ordering = ("order", "title")
