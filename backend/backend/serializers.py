from django.contrib.auth.models import User
from rest_framework import serializers
from backend.models import ActivityLog, Profile

from backend.getters import get_user_full_info


class UserSerializer(serializers.ModelSerializer):
    home_city = serializers.CharField(write_only=True)
    score = serializers.IntegerField(source="profile.score", read_only=True)
    distance_with_bike = serializers.FloatField(source="profile.distance_with_bike", read_only=True)
    distance_with_walking = serializers.FloatField(source="profile.distance_with_walking", read_only=True)
    distance_with_public_transport = serializers.FloatField(source="profile.distance_with_public_transport", read_only=True)
    co2_saved = serializers.FloatField(source="profile.co2_saved", read_only=True)

    class Meta:
        model = User
        fields = [
            'username', 'password', 'home_city',
            'score', 'distance_with_bike', 'distance_with_walking',
            'distance_with_public_transport', 'co2_saved'
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        home_city = validated_data.pop('home_city')
        user = User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()

        # Create the Profile with default values
        Profile.objects.create(
            user=user,
            score=0,
            distance_with_bike=0.0,
            distance_with_walking=0.0,
            distance_with_public_transport=0.0,
            co2_saved=0.0,
        )

        print(f"User {user.username} is from {home_city}")
        return user


class ActivityLogSerializer(serializers.ModelSerializer):
    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = ActivityLog
        fields = ['id', 'activity_type', 'activity_time', 'square_id']
        read_only_fields = ['activity_time']
