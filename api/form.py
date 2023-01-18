from django.forms import ModelForm
from django import forms
from .models import StockInfoA


class UploadForm2(ModelForm):
    symbol = forms.TextInput()
    data = forms.TextInput()
    class Meta:
        model = StockInfoA
        fields = ['symbol', 'data']

