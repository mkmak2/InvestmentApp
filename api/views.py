from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .form import UploadForm, UploadForm2
from .models import StockData,  StockInfoA
from django.core.cache import caches
from rest_framework import generics
from .serializers import StockInfoSerializer, StockInfoASerializer, StockDataSerializer
from datetime import datetime, timedelta
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

def validate(date_text):
        try:
            datetime.strptime(date_text, '%Y-%m-%d')
            return 1
        except ValueError:
            return 0


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
                if StockData.objects.filter(symbol=var).exists():
                    date = StockData.objects.get(symbol=var)
                    field_object = StockData._meta.get_field(field_name='data')
                    field_value = field_object.value_from_object(date)
                    date1 = str(field_value['Meta Data']['3. Last Refreshed'])
                    if validate(date1) == 1:
                        date_object = datetime.strptime(date1, '%Y-%m-%d')
                    else:
                        date_object = datetime.strptime(date1, '%Y-%m-%d %H:%M:%S')
                    date_object1 = date_object.date()
                    compare = datetime.now() - timedelta(days=7)
                    compare1 = compare.date()
                    #d1_ts = time.mktime(date_object.timetuple())
                    #d2_ts = time.mktime(compare1.timetuple())
                    if compare1>date_object1:
                        price_series = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol={var}&apikey={APIKEY}&outputsize=full').json()
                        i=i+1
                        StockData.objects.filter(symbol=var).update(data=price_series)
                        if i==4:
                            time.sleep(65)
                            i=0
                    continue
                else:
                     price_series = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol={var}&apikey={APIKEY}&outputsize=full').json()
                     i=i+1
                     temp2 = StockData(symbol=var, data=price_series)
                     temp2.save()
                     if i==4:
                        time.sleep(65)
                        i=0
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
