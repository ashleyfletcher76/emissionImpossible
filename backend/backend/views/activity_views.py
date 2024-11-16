from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from ..serializers import ActivityLogSerializer

class LogActivityView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        data['user'] = request.user.id  # Link the logged-in user to the activity
        serializer = ActivityLogSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

