from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=160)),
                ("slug", models.SlugField(blank=True, max_length=180, unique=True)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("servo_motor", "Servo Motor"),
                            ("motor_driver", "Motor Driver"),
                            ("software_firmware", "Software & Firmware"),
                        ],
                        max_length=32,
                    ),
                ),
                ("short_description", models.CharField(max_length=260)),
                ("description", models.TextField()),
                ("key_features", models.JSONField(blank=True, default=list)),
                ("specifications", models.JSONField(blank=True, default=dict)),
                ("main_image", models.ImageField(blank=True, null=True, upload_to="products/")),
                ("is_featured", models.BooleanField(default=False)),
                ("order", models.PositiveIntegerField(default=0)),
            ],
            options={"ordering": ["order", "name"]},
        ),
    ]
