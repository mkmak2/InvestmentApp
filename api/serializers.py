from rest_framework import serializers

from .models import StockInfo, StockInfoAd, StockInfoA


class StockInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfo
        fields = ["data"]

class StockInfoAdSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfoAd
        fields = ["symbol", "data"]

class StockInfoASerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfoA
        fields = ["symbol", "data"]
