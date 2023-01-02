from django.shortcuts import render

from rest_framework import generics, status, request, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
#from .models import UserData
#from .serializers import UserDataSerializer
from rest_framework.decorators import api_view

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
import json

@require_http_methods(["GET","POST"])
def loginView(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    if username is None or password is None:
        return JsonResponse({"info":"Username and password is needed"})

    user = authenticate(username=username, password = password)

    if user is None:
        return JsonResponse({"info":"user does not exist"}, status = 400)
        
    login(request, user)
    return JsonResponse({"info":"User logged in successfully"})

class WhoAmIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(request, format=None):
        print(request.user.username)
        return JsonResponse({"Username", request.user.username})


'''

# Create your views here.
class UserDataView(generics.ListAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class CreateUserDataView(APIView):
    serializer_class = UserDataSerializer
    queryset = UserData.objects.all()

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


'''