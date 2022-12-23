from django.contrib import admin
from django.urls import path
import api.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Stock/<int:StockInfo_id>', api.views.Stock),
    path('Stock/upload', api.views.upload, name='upload'),
    path("api/", api.views.StockInfoListView.as_view(), name="store_home"),
    path("", api.views.home),
    path('get_stock_data/', api.views.get_stock_data),
]