from django.forms import ModelForm
from django import forms
from .models import StockInfo, StockInfoAd

class UploadForm(ModelForm):
    symbol = forms.TextInput()
    class Meta:
        model = StockInfo
        fields = ['data']

class UploadForm2(ModelForm):
    symbol = forms.TextInput()
    class Meta:
        model = StockInfoAd
        fields = ['symbol']