## Authentication API for React Native

This API provides user authentication functionality, including registration, login, and logout, using token-based authentication. Here’s how to integrate it with your React Native app.
Endpoints
1. Register a User

URL: /backend/register/
Method: POST

Request Body:
```json
{
    "username": "string",
    "password": "string",
    "home_city": "string"
}
```

Response:

* Success (201):
```json
{
    "message": "User created successfully",
    "user": {
        "username": "testuser"
    }
}
```

* Error (400):

    {
        "error": "Username already exists"
    }

## Integration in React Native

```bash
import axios from 'axios';

const registerUser = async (username, password, home_city) => {
  try {
    const response = await axios.post('http://localhost:8000/backend/register/', {
      username,
      password,
      home_city, // Add the user's home city
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};
```

2. Login

URL: /backend/login/
Method: POST

Request Body:
```json
{
    "username": "string",
    "password": "string"
}
```

Response:

* Success (200):
```json
{
    "token": "your-auth-token"
}
```

* Error (401):
```json
    {
        "error": "Invalid credentials"
    }
```

## Integration in React Native

```bash
import axios from 'axios';

const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8000/backend/login/', {
      username,
      password,
    });
    const token = response.data.token;
    console.log('Token:', token);
    return token; // Save this token for authenticated requests
  } catch (error) {
    console.error(error.response.data);
  }
};
```

3. Logout

URL: /backend/logout/
Method: POST
Headers:

```json
Authorization: Token your-auth-token
```

Response:

* Success (200):
```json
{
    "message": "Logged out successfully"
}
```

* Error (401):
```json
    {
        "detail": "Authentication credentials were not provided."
    }
```

## Integration in React Native
```bash
import axios from 'axios';

const logoutUser = async (token) => {
  try {
    await axios.post(
      'http://localhost:8000/backend/logout/',
      {}, // No body required
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log('Logged out successfully');
  } catch (error) {
    console.error(error.response.data);
  }
};
```

## Notes for React Native Developers

1. Base URL: Replace http://localhost:8000 with your backend server URL. If running on a physical device or emulator, ensure the backend is accessible on your local network.
        For emulators, you can use http://10.0.2.2:8000 for Android or the machine's IP for iOS.

2. Token Storage:
    * Use a secure storage library like AsyncStorage or SecureStore to store the token after login.
    Example:
```bash
    import AsyncStorage from '@react-native-async-storage/async-storage';

    const storeToken = async (token) => {
      try {
        await AsyncStorage.setItem('authToken', token);
      } catch (error) {
        console.error('Failed to save the token:', error);
      }
    };
```

3. Authenticated Requests: Include the token in the Authorization header for endpoints requiring authentication (e.g., logout).
```json
const headers = {
  Authorization: `Token ${token}`,
};
```
4. Error Handling: Provide clear feedback to the user for errors like invalid credentials or duplicate usernames.
