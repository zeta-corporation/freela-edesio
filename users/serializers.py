from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = '__all__'
 

    def create(self,validated_data:dict):
        print(validated_data)
        return User.objects.create_user(**validated_data)
