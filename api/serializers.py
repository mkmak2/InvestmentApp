from rest_framework import serializers

from .models import StockInfoA, StockData



class StockDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockData
        fields = ["symbol", "data"]

class StockInfoASerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfoA
        fields = ["symbol", "data"]
