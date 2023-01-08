from django.urls import path
from acc_management import views


urlpatterns = [
 
  path('user/', views.userOverview, name="user-overview"),
  path('user-list/', views.userList, name="user-list"),
  path('user-detail/<str:pk>/', views.userDetail, name="user-list"),
  path('user-create/', views.userCreate, name="user-list"),
  path('user-update/<str:pk>/', views.userUpdate, name="user-list"),
  path('user-delete/<str:pk>', views.userDelete, name="user-list"),

]


 