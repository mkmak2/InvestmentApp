# Generated by Django 4.1.5 on 2023-01-17 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acc_management', '0015_alter_userdata_investments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='investments',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
