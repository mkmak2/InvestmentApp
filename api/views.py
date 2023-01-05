from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .form import UploadForm, UploadForm2
from .models import StockData, StockInfo, StockInfoA
from django.core.cache import caches
from rest_framework import generics
from .serializers import StockInfoSerializer, StockInfoASerializer, StockDataSerializer
import time

import requests
import json


APIKEY = 'ER4AWBFVV1OVHR39' 
#replace 'my_alphav_api_key' with your actual Alpha Vantage API key obtained from https://www.alphavantage.co/support/#api-key


DATABASE_ACCESS = True 
#if False, the app will always query the Alpha Vantage APIs regardless of whether the stock data for a given ticker is already in the local database


#view function for rendering home.html
def home(request):
    return render(request, 'home.html', {})

def home2(request):
    return render(request, 'StockInfoSym.html', {})

def coll(request):
    return render(request, 'coll.html', {})

def Stc(request, StockInfo_id):
    stock = StockInfo.objects.get(pk = StockInfo_id)
    if stock is not None:
        return 0

def Stock(request, StockInfo_id):
    stock = caches.get(StockInfo_id)
    if stock:
        print('cache')
        return render(request, 'Stock.html', {'StockInfo': stock})
    
    else:
        print('db')
        stock = get_object_or_404(StockInfo, pk=StockInfo_id)
        if stock is not None:
            caches.set(StockInfo_id, stock)
            return render(request, 'Stock.html', {'StockInfo': stock})

def upload(request):
    if request.POST:
        form = UploadForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect(home)
    return render(request, 'upload.html', {'form' : UploadForm})

def upload2(request):
    if request.POST:
        form = UploadForm2(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'upload2.html', {'form' : UploadForm2})



class StockInfoListView(generics.ListAPIView):
    queryset = StockInfo.objects.all()
    serializer_class = StockInfoSerializer

class StockDataListView(generics.ListAPIView):
    queryset = StockData.objects.all()
    serializer_class = StockDataSerializer

class StockDataView(generics.RetrieveAPIView):
    lookup_field="symbol"
    queryset = StockData.objects.all()
    serializer_class = StockDataSerializer

class StockInfoListViewSym(generics.ListAPIView):
    queryset = StockInfoA.objects.all()
    serializer_class = StockInfoASerializer

class StockInfoViewSym(generics.RetrieveAPIView):
    lookup_field="symbol"
    queryset = StockInfoA.objects.all()
    serializer_class = StockInfoASerializer

@csrf_exempt
def collect_data(request):
    ticker=request.POST.get("ticker", "null")
    ticker = ticker.upper()
    filepath="api\symbol.txt"
    f = open(filepath, 'r')
    i=0
    for line in f:
         var = line.strip()
         if DATABASE_ACCESS == True:
            if StockInfoA.objects.filter(symbol=var).exists(): 
              continue
            else:
                info = requests.get(f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={var}&apikey={APIKEY}').json()
                i=i+1
                temp = StockInfoA(symbol=var, data=info)
                temp.save()
                if i==4:
                    time.sleep(65)
                    i=0
                price_series = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol={var}&apikey={APIKEY}&outputsize=full').json()
                i=i+1
                temp2 = StockData(symbol=var, data=price_series)
                temp2.save()
                if i==4:
                    time.sleep(65)
                    i=0
    f.close()
    return 0

@csrf_exempt
def get_stock_data(request):
        ticker = request.POST.get('ticker', 'null')
        ticker = ticker.upper()

        if DATABASE_ACCESS == True:
            #checking if the database already has data stored for this ticker before querying the Alpha Vantage API
            if StockData.objects.filter(symbol=ticker).exists(): 
                #We have the data in our database! Get the data from the database directly and send it back to the frontend AJAX call
                entry = StockData.objects.filter(symbol=ticker)[0]
                return HttpResponse(entry.data, content_type='application/json')

        #obtain stock data from Alpha Vantage APIs
        #get adjusted close data
        price_series = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol={ticker}&apikey={APIKEY}&outputsize=full').json()
        
        #package up the data in an output dictionary 
        #save the dictionary to database
        temp = StockData(symbol=ticker, data=price_series)
        temp.save()

        #return the data back to the frontend AJAX call 
        return HttpResponse(json.dumps(temp.data), content_type='application/json')

@csrf_exempt
def get_stock_info(request):
        ticker = request.POST.get('ticker', 'null')
        ticker = ticker.upper()

        if DATABASE_ACCESS == True:
            #checking if the database already has data stored for this ticker before querying the Alpha Vantage API
            if StockInfoA.objects.filter(symbol=ticker).exists(): 
                #We have the data in our database! Get the data from the database directly and send it back to the frontend AJAX call
                entry = StockInfoA.objects.filter(symbol=ticker)[0]
                return HttpResponse(entry.data, content_type='application/json')

        #obtain stock data from Alpha Vantage APIs
        #get adjusted close data
        info = requests.get(f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={ticker}&apikey={APIKEY}').json()

        
        #package up the data in an output dictionary 
        #save the dictionary to database
        temp = StockInfoA(symbol=ticker, data=info)
        temp.save()

        #return the data back to the frontend AJAX call 
        return HttpResponse(json.dumps(temp.data), content_type='application/json')
