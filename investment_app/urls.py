from django.contrib import admin
from django.urls import path
import api.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Stock/<int:StockInfo_id>', api.views.Stock),
    path('Stock/upload', api.views.upload, name='upload'),
    path('Stock/upload2', api.views.upload2, name='upload2'), #wysyłanie formem inwestycji + symbolu
    path("api/", api.views.StockInfoListView.as_view(), name="store_home"), #zwrot danych wszystkich inwestycji
    path("api-sym/", api.views.StockInfoListViewSym.as_view(), name="store_home"),#to co wyżej z symbolem
    path("api-sym/<slug:symbol>/", api.views.StockInfoViewSym.as_view(), name="inwestycja"),#to co wyżej z symbolem
    path("", api.views.home),
    path('get_stock_data/', api.views.get_stock_data),
]