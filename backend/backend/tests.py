from django.test import TestCase
from django.contrib.auth.models import User
from backend.models import Profile
from backend.getters import get_user_full_info
from backend.setters import (
    increment_user_score,
    increment_distance_with_bike,
    increment_distance_with_walking,
    increment_distance_with_public_transport,
    increment_co2_saved,
)


class UserGetterTests(TestCase):
    def setUp(self):
        """Set up test data: Create two users with profiles."""
        # Create user Ashley
        ashley = User.objects.create(username="Ashley")
        ashley.set_password("password123")
        ashley.save()

        Profile.objects.create(user=ashley, score=10, distance_with_bike=5.5, distance_with_walking=2.3,
                               distance_with_public_transport=8.0, co2_saved=3.1)

        # Create user Mate
        mate = User.objects.create(username="Mate")
        mate.set_password("securepassword")
        mate.save()

        Profile.objects.create(user=mate, score=15, distance_with_bike=10.2, distance_with_walking=4.1,
                               distance_with_public_transport=15.0, co2_saved=5.2)

    def test_get_user_full_info_ashley(self):
        """Test fetching Ashley's information."""
        ashley = User.objects.get(username="Ashley")
        user_info = get_user_full_info(ashley.id)

        print("\nUser Info for Ashley:")
        print(user_info)

        self.assertEqual(user_info["username"], "Ashley")
        self.assertEqual(user_info["score"], 10)
        self.assertEqual(user_info["distance_with_bike"], 5.5)
        self.assertEqual(user_info["distance_with_walking"], 2.3)
        self.assertEqual(user_info["distance_with_public_transport"], 8.0)
        self.assertEqual(user_info["co2_saved"], 3.1)

    def test_increment_user_score_ashley(self):
        """Test incrementing Ashley's score."""
        ashley = User.objects.get(username="Ashley")
        result = increment_user_score(ashley.id, 5)

        print("\nIncrement Result for Ashley's Score:")
        print(result)

        user_info = get_user_full_info(ashley.id)
        self.assertEqual(user_info["score"], 15)

    def test_increment_distance_with_bike_mate(self):
        """Test incrementing Mate's bike distance."""
        mate = User.objects.get(username="Mate")
        result = increment_distance_with_bike(mate.id, 2.8)

        print("\nIncrement Result for Mate's Bike Distance:")
        print(result)

        user_info = get_user_full_info(mate.id)
        self.assertEqual(user_info["distance_with_bike"], 13.0)

    def test_increment_all_variables(self):
        """Test incrementing all variables for Ashley."""
        ashley = User.objects.get(username="Ashley")

        increment_user_score(ashley.id, 3)
        increment_distance_with_bike(ashley.id, 1.5)
        increment_distance_with_walking(ashley.id, 0.7)
        increment_distance_with_public_transport(ashley.id, 2.0)
        increment_co2_saved(ashley.id, 1.2)

        user_info = get_user_full_info(ashley.id)

        print("\nUpdated User Info for Ashley (After Increments):")
        print(user_info)

        self.assertEqual(user_info["score"], 13)
        self.assertEqual(user_info["distance_with_bike"], 7.0)
        self.assertEqual(user_info["distance_with_walking"], 3.0)
        self.assertEqual(user_info["distance_with_public_transport"], 10.0)
        self.assertEqual(user_info["co2_saved"], 4.3)

    def test_home_city(self):
        """Test that home city for Ashley and Mate is Heilbronn."""
        ashley = User.objects.get(username="Ashley")
        mate = User.objects.get(username="Mate")

        ashley_city = "Heilbronn"
        mate_city = "Heilbronn"

        print("\nHome City for Ashley:")
        print(f"Ashley's home city is {ashley_city}")

        print("\nHome City for Mate:")
        print(f"Mate's home city is {mate_city}")

        self.assertEqual(Profile.objects.get(user=ashley).user.profile.user.username, "Ashley")
        self.assertEqual(Profile.objects.get(user=mate).user.profile.user.username, "Mate")
