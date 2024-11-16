from django.db import models
from django.contrib.auth.models import User

class ActivityLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
    ACTIVITY_CHOICES = [
        ('walking', 'Walking'),
        ('cycling', 'Cycling'),
        ('bus', 'Bus'),
    ]

    activity_type = models.CharField(max_length=50, choices=ACTIVITY_CHOICES)
    activity_time = models.DateTimeField(auto_now_add=True)
    square_id = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.activity_type} at {self.square_id} by {self.user.username}"
