from backend.models import Profile

def increment_user_score(user_id, increment_value):
    """Increment the score of the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        profile.score += increment_value
        profile.save()
        return f"New score for user {profile.user.username}: {profile.score}"
    except Profile.DoesNotExist:
        return "Profile not found"

def increment_distance_with_bike(user_id, increment_value):
    """Increment the distance traveled with a bike by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        profile.distance_with_bike += increment_value
        profile.save()
        return f"New distance with bike for user {profile.user.username}: {profile.distance_with_bike}"
    except Profile.DoesNotExist:
        return "Profile not found"

def increment_distance_with_walking(user_id, increment_value):
    """Increment the distance traveled by walking by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        profile.distance_with_walking += increment_value
        profile.save()
        return f"New distance with walking for user {profile.user.username}: {profile.distance_with_walking}"
    except Profile.DoesNotExist:
        return "Profile not found"

def increment_distance_with_public_transport(user_id, increment_value):
    """Increment the distance traveled by public transport by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        profile.distance_with_public_transport += increment_value
        profile.save()
        return f"New distance with public transport for user {profile.user.username}: {profile.distance_with_public_transport}"
    except Profile.DoesNotExist:
        return "Profile not found"

def increment_co2_saved(user_id, increment_value):
    """Increment the CO2 saved by the user."""
    try:
        profile = Profile.objects.get(user_id=user_id)
        profile.co2_saved += increment_value
        profile.save()
        return f"New CO2 saved for user {profile.user.username}: {profile.co2_saved}"
    except Profile.DoesNotExist:
        return "Profile not found"
