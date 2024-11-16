from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from backend.serializers import UserSerializer
from backend.models import Profile


from backend.getters import get_user_full_info

import logging

logger = logging.getLogger(__name__)

class UserRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if User.objects.filter(username=request.data.get("username")).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            profile = Profile.objects.get(user=user)
            logger.info("User created successfully: %s", serializer.data)
            return Response(
                {
                    "message": "User created successfully",
                    "user": {
                        "username": user.username,
                        "score": profile.score,
                        "distance_with_bike": profile.distance_with_bike,
                        "distance_with_walking": profile.distance_with_walking,
                        "distance_with_public_transport": profile.distance_with_public_transport,
                        "co2_saved": profile.co2_saved,
                    }
                },
                status=status.HTTP_201_CREATED,
            )
        logger.error("Registration failed: %s", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
