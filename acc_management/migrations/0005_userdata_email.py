# Generated by Django 4.1.4 on 2023-01-07 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acc_management', '0004_remove_userdata_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='email',
            field=models.EmailField(default=None, max_length=255),
        ),
    ]