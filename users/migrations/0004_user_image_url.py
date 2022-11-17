# Generated by Django 4.1.3 on 2022-11-17 17:19

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_tel'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to=users.models.upload_to),
        ),
    ]
