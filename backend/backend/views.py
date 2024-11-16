import logging
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer

logger = logging.getLogger(__name__)

class UserRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data.copy()
        data.pop('password', None)
        logger.info("Incoming registration data: %s", data)

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            logger.info("User created successfully: %s", serializer.data)
            return Response(
                {
                    "message": "User created successfully",
                    "user": serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        # Log errors
        logger.error("Registration failed: %s", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
