from django.db import models

from apps.common.models import TimeStampedModel


class Inquiry(TimeStampedModel):
    class ProductInterest(models.TextChoices):
        JS_R7 = "JS-R7 Servo Motor", "JS-R7 Servo Motor"
        MOTOR_DRIVER = "Motor Driver", "Motor Driver"
        SOFTWARE_FIRMWARE = "Software/Firmware", "Software/Firmware"
        CUSTOM_DEVELOPMENT = "Custom Development", "Custom Development"
        OTHER = "Other", "Other"

    class Status(models.TextChoices):
        NEW = "new", "New"
        CONTACTED = "contacted", "Contacted"
        QUOTED = "quoted", "Quoted"
        CLOSED = "closed", "Closed"

    name = models.CharField(max_length=120)
    company = models.CharField(max_length=160, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=80, blank=True)
    product_interest = models.CharField(max_length=80, choices=ProductInterest.choices)
    quantity = models.CharField(max_length=80, blank=True)
    application = models.CharField(max_length=220, blank=True)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    admin_note = models.TextField(blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.product_interest}"
