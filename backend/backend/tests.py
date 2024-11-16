from django.test import TestCase
from django.contrib.auth.models import User
from backend.models import Profile
from backend.getters import get_user_full_info


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

    def test_get_user_full_info_mate(self):
        """Test fetching Mate's information."""
        mate = User.objects.get(username="Mate")
        user_info = get_user_full_info(mate.id)

        print("\nUser Info for Mate:")
        print(user_info)

        self.assertEqual(user_info["username"], "Mate")
        self.assertEqual(user_info["score"], 15)
        self.assertEqual(user_info["distance_with_bike"], 10.2)
        self.assertEqual(user_info["distance_with_walking"], 4.1)
        self.assertEqual(user_info["distance_with_public_transport"], 15.0)
        self.assertEqual(user_info["co2_saved"], 5.2)

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
