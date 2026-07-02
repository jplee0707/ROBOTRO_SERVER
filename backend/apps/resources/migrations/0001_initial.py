from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Resource",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=180)),
                ("slug", models.SlugField(blank=True, max_length=200, unique=True)),
                ("product", models.CharField(max_length=120)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("datasheet", "Datasheet"),
                            ("manual", "Manual"),
                            ("firmware", "Firmware"),
                            ("software", "Software"),
                            ("drawing", "Drawing"),
                            ("wiring_guide", "Wiring Guide"),
                            ("installation_guide", "Installation Guide"),
                            ("other", "Other"),
                        ],
                        max_length=32,
                    ),
                ),
                ("description", models.TextField()),
                ("version", models.CharField(blank=True, max_length=60)),
                ("file", models.FileField(blank=True, null=True, upload_to="resources/")),
                ("external_url", models.URLField(blank=True)),
                ("published_at", models.DateField()),
                ("is_public", models.BooleanField(default=True)),
                ("order", models.PositiveIntegerField(default=0)),
            ],
            options={"ordering": ["order", "-published_at", "title"]},
        ),
    ]
