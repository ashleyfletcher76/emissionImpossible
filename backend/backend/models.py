from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    score = models.IntegerField(default=0)
    distance_with_bike = models.FloatField(default=0.0)
    distance_with_walking = models.FloatField(default=0.0)
    distance_with_public_transport = models.FloatField(default=0.0)
    co2_saved = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.user.username}'s Profile"

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
