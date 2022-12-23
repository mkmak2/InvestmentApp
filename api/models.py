from django.db import models

# Create your models here.

class StockData(models.Model):
    symbol = models.TextField(null=True)
    data = models.TextField(null=True)

class StockInfo(models.Model):
    data = models.JSONField(null=True)

class StockInfoAd(models.Model):
    symbol = models.TextField(null=True)
    data = models.TextField(null=True)