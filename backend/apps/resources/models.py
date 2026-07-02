from django.db import models
from django.utils.text import slugify


class Resource(models.Model):
    class Category(models.TextChoices):
        DATASHEET = "datasheet", "Datasheet"
        MANUAL = "manual", "Manual"
        FIRMWARE = "firmware", "Firmware"
        SOFTWARE = "software", "Software"
        DRAWING = "drawing", "Drawing"
        WIRING_GUIDE = "wiring_guide", "Wiring Guide"
        INSTALLATION_GUIDE = "installation_guide", "Installation Guide"
        OTHER = "other", "Other"

    title = models.CharField(max_length=180)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    product = models.CharField(max_length=120)
    category = models.CharField(max_length=32, choices=Category.choices)
    description = models.TextField()
    version = models.CharField(max_length=60, blank=True)
    file = models.FileField(upload_to="resources/", blank=True, null=True)
    external_url = models.URLField(blank=True)
    published_at = models.DateField()
    is_public = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "-published_at", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
