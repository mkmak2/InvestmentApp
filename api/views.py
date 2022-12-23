from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from .form import UploadForm, UploadForm2
from .models import StockData, StockInfo
from django.core.cache import caches
from rest_framework import generics
from .serializers import StockInfoSerializer

import requests
import json


APIKEY = 'my_alphav_api_key' 
#replace 'my_alphav_api_key' with your actual Alpha Vantage API key obtained from https://www.alphavantage.co/support/#api-key


DATABASE_ACCESS = True 
#if False, the app will always query the Alpha Vantage APIs regardless of whether the stock data for a given ticker is already in the local database


#view function for rendering home.html
def home(request):
    return render(request, 'home.html', {})

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


class StockInfoListView(generics.ListAPIView):
    queryset = StockInfo.objects.all()
    serializer_class = StockInfoSerializer

@csrf_exempt
def get_stock_data(request):
        #get ticker from the AJAX POST request
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
        
        #get SMA (simple moving average) data
        #package up the data in an output dictionary 
        output_dictionary = {}
        output_dictionary['prices'] = price_series

        #save the dictionary to database
        temp = StockData(symbol=ticker, data=json.dumps(output_dictionary))
        temp.save()

        #return the data back to the frontend AJAX call 
        return HttpResponse(json.dumps(output_dictionary), content_type='application/json')