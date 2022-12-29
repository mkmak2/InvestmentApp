from django.shortcuts import render

from rest_framework import generics, status 
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserData
from .serializers import UserDataSerializer

import requests
import json


# Create your views here.
class UserDataView(generics.ListAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
