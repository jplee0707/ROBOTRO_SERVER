from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Inquiry",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=120)),
                ("company", models.CharField(blank=True, max_length=160)),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(blank=True, max_length=80)),
                (
                    "product_interest",
                    models.CharField(
                        choices=[
                            ("JS-R7 Servo Motor", "JS-R7 Servo Motor"),
                            ("Motor Driver", "Motor Driver"),
                            ("Software/Firmware", "Software/Firmware"),
                            ("Custom Development", "Custom Development"),
                            ("Other", "Other"),
                        ],
                        max_length=80,
                    ),
                ),
                ("quantity", models.CharField(blank=True, max_length=80)),
                ("application", models.CharField(blank=True, max_length=220)),
                ("message", models.TextField()),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("new", "New"),
                            ("contacted", "Contacted"),
                            ("quoted", "Quoted"),
                            ("closed", "Closed"),
                        ],
                        default="new",
                        max_length=20,
                    ),
                ),
                ("admin_note", models.TextField(blank=True)),
            ],
            options={"ordering": ["-created_at"]},
        ),
    ]
