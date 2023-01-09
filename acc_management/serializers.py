from rest_framework import serializers

from .models import UserData


class  UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ("username", "password",  "email", "is_logged")

