from django.db import models
from django.utils.text import slugify

from apps.products.models import Product


class ApplicationExample(models.Model):
    class Category(models.TextChoices):
        COMPACT_ROBOTICS = "compact_robotics", "Compact Robotics"
        DELTA_ROBOT_EXAMPLE = "delta_robot_example", "Delta Robot Example"
        HUMANOID_JOINT_EXAMPLE = "humanoid_joint_example", "Humanoid Joint Example"
        EDUCATION_RESEARCH = "education_research", "Education / Research"
        CUSTOM_MECHANISM = "custom_mechanism", "Custom Mechanism"

    title = models.CharField(max_length=180)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    category = models.CharField(max_length=40, choices=Category.choices)
    description = models.TextField()
    image = models.ImageField(upload_to="applications/", blank=True, null=True)
    related_products = models.ManyToManyField(Product, blank=True, related_name="application_examples")
    order = models.PositiveIntegerField(default=0)
    is_public = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
