from django.urls import path
from backend.views import LoginView, LogoutView, UserRegisterView, LogActivityView, UserInfoView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', UserRegisterView.as_view(), name='register'),
	path('log-activities/', LogActivityView.as_view(), name='activity-create'),
	path('user-info/', UserInfoView.as_view(), name='user-info'),
]
