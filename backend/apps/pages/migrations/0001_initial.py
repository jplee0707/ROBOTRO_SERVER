from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="ApplicationExample",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=180)),
                ("slug", models.SlugField(blank=True, max_length=200, unique=True)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("compact_robotics", "Compact Robotics"),
                            ("delta_robot_example", "Delta Robot Example"),
                            ("humanoid_joint_example", "Humanoid Joint Example"),
                            ("education_research", "Education / Research"),
                            ("custom_mechanism", "Custom Mechanism"),
                        ],
                        max_length=40,
                    ),
                ),
                ("description", models.TextField()),
                ("image", models.ImageField(blank=True, null=True, upload_to="applications/")),
                ("order", models.PositiveIntegerField(default=0)),
                ("is_public", models.BooleanField(default=True)),
                (
                    "related_products",
                    models.ManyToManyField(blank=True, related_name="application_examples", to="products.product"),
                ),
            ],
            options={"ordering": ["order", "title"]},
        ),
    ]
