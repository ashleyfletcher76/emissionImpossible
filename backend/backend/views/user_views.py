from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from backend.serializers import UserSerializer
from backend.models import Profile

from backend.getters import get_user_full_info
from backend.setters import increment_user_score


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

class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        """Retrieve the full information of the logged-in user."""
        user_id = request.user.id
        user_info = get_user_full_info(user_id)
        if isinstance(user_info, str):
            return Response({"error": user_info}, status=404)
        return Response(user_info, status=200)
