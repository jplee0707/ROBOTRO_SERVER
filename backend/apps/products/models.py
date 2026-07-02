from django.db import models
from django.utils.text import slugify

from apps.common.models import TimeStampedModel


class Product(TimeStampedModel):
    class Category(models.TextChoices):
        SERVO_MOTOR = "servo_motor", "Servo Motor"
        MOTOR_DRIVER = "motor_driver", "Motor Driver"
        SOFTWARE_FIRMWARE = "software_firmware", "Software & Firmware"

    name = models.CharField(max_length=160)
    slug = models.SlugField(max_length=180, unique=True, blank=True)
    category = models.CharField(max_length=32, choices=Category.choices)
    short_description = models.CharField(max_length=260)
    description = models.TextField()
    key_features = models.JSONField(default=list, blank=True)
    specifications = models.JSONField(default=dict, blank=True)
    main_image = models.ImageField(upload_to="products/", blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
