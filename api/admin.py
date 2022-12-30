from django.contrib import admin
from .models import StockInfo, StockData, StockInfoAd, StockInfoA
# Register your models here.

admin.site.register(StockInfo)
admin.site.register(StockData)
admin.site.register(StockInfoAd)
admin.site.register(StockInfoA)