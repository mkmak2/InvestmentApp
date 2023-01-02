from django.contrib import admin
from django.urls import path
import api.views
import acc_management.views as av

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Stock/<int:StockInfo_id>', api.views.Stock),
    path('Stock/upload', api.views.upload, name='upload'),
    path('Stock/upload2', api.views.upload2, name='upload2'),
    path("api/", api.views.StockInfoListView.as_view(), name="store_home"),
    path("api-sym/", api.views.StockInfoListViewSym.as_view(), name="store_home"),
    path("", api.views.home),
    path('get_stock_data/', api.views.get_stock_data),
   # path("acc_management/", av.UserDataView.as_view(), name="UserData"),
  #  path("acc_management2/", av.CreateUserDataView.as_view(), name="UserData2"),
    path("login/", av.loginView, name="api-login"),
    path("whoami/", av.WhoAmIView.as_view(), name="whoami"),
]