from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the Eco Transport App"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/', include("backend.urls")),
    path('', home, name='home'),
]
