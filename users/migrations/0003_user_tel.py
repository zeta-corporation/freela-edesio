# Generated by Django 4.1.3 on 2022-11-17 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tel',
            field=models.TextField(default='8199999-9999', max_length=30),
        ),
    ]
