from django.urls import path
from price_predict import views


urlpatterns = [
 
  path('price/<str>', views.price, name="user-overview"),
  
]