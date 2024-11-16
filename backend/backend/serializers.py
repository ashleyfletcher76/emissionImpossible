from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    home_city = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'password', 'home_city']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        home_city = validated_data.pop('home_city')
        user = User(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        print(f"User {user.username} is from {home_city}")
        return user
