from rest_framework import serializers

from .models import StockInfo, StockInfoAd, StockInfoA, StockData


class StockInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfo
        fields = ["data"]

class StockDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockData
        fields = ["symbol", "data"]

class StockInfoASerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfoA
        fields = ["symbol", "data"]
