from django.contrib.auth.models import User
from backend.models import Profile


def get_user_score(user_id):
    """Get the score of the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        return profile.score
    except Profile.DoesNotExist:
        return "Profile not found"


def get_user_distance_with_bike(user_id):
    """Get the distance traveled with a bike by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        return profile.distance_with_bike
    except Profile.DoesNotExist:
        return "Profile not found"


def get_user_distance_with_walking(user_id):
    """Get the distance traveled by walking by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        return profile.distance_with_walking
    except Profile.DoesNotExist:
        return "Profile not found"


def get_user_distance_with_public_transport(user_id):
    """Get the distance traveled by public transport by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        return profile.distance_with_public_transport
    except Profile.DoesNotExist:
        return "Profile not found"


def get_user_co2_saved(user_id):
    """Get the CO2 saved by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        return profile.co2_saved
    except Profile.DoesNotExist:
        return "Profile not found"


def get_user_full_info(user_id):
    """Call all the getters and return a dictionary with all user information."""
    try:
        user = User.objects.get(id=user_id)
        profile = Profile.objects.get(user_id=user_id)

        return {
            "username": user.username,
            "score": profile.score,
            "distance_with_bike": profile.distance_with_bike,
            "distance_with_walking": profile.distance_with_walking,
            "distance_with_public_transport": profile.distance_with_public_transport,
            "co2_saved": profile.co2_saved,
        }
    except User.DoesNotExist:
        return "User not found"
    except Profile.DoesNotExist:
        return "Profile not found"
