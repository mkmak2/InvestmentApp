from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import UserDataSerializer
from .models import UserData
from django.http import HttpResponse


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def userOverview(request):
    api_urls = {
        'List':'/user-list/',
        'Detail View':'/user-detail/<str:pk>/',
        'Create':'/user-create/',
        'Update':'/user-update/<str:pk>/',
        'Delete':'/user-delete/<str:pk>',
 
    }
    return Response(api_urls)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def userList(request):
    users = UserData.objects.all()
    serializer = UserDataSerializer(users, many=True)

    return Response(serializer.data)



@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def userDetail(request, pk):
    users = UserData.objects.get(username=pk)
    serializer = UserDataSerializer(users, many=False)

    return Response(serializer.data)

@api_view(['POST'])     #create
@permission_classes((permissions.AllowAny,)) 
def userCreate(request):
    name = request.data.get('username')
    serializer = UserDataSerializer(data=request.data)
    
    if not(UserData.objects.filter(username = name).exists()):
        if serializer.is_valid():
            serializer.save()
        
        return Response(serializer.data)
    else:
        return HttpResponse(content="", status=303)
    
   

#czy istnieje 303, czy haslo 304
@api_view(['POST'])     #update, raczej tylko do logowania, dopisania inwestycji
@permission_classes((permissions.AllowAny,))
def userUpdate(request, pk):
    lookup_field="username"
    users = UserData.objects.get(username=pk)
    name = request.data.get('username')
    passw = request.data.get('password')
    serializer = UserDataSerializer(instance=users, data=request.data)

    if not(UserData.objects.filter(username = name).exists()):
        return HttpResponse(content="", status=303)
    elif passw == users.password:
         if serializer.is_valid():
            serializer.save()
        
         return Response(serializer.data)
    else:
        return HttpResponse(content="", status=304)
        

@api_view(['DELETE'])     #delete
@permission_classes((permissions.AllowAny,))
def userDelete(request, pk):
    users = UserData.objects.get(username=pk)
    users.delete()

    return Response("Item deleted")

