from django.contrib import admin
from .models import StockInfo, StockData
# Register your models here.

admin.site.register(StockInfo)
admin.site.register(StockData)