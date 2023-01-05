from django.db import models

# Create your models here.

class StockData(models.Model):
    symbol = models.SlugField(null=True)
    data = models.JSONField(null=True)

class StockInfo(models.Model):
    data = models.JSONField(null=True)

class StockInfoAd(models.Model):
    symbol = models.TextField(null=True)
    data = models.JSONField(null=True)


class StockInfoA(models.Model):
    symbol = models.SlugField(max_length=20)
    data = models.JSONField(null=True)