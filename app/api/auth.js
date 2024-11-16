// api/auth.js
const registerUser = async (username, password, homeCity) => {
  try {
    const response = await fetch('http://localhost:8000/backend/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        home_city: homeCity
      })
    });

    if (response.status === 201) {
      const data = await response.json();
      return {
        success: true,
        data
      };
    } else {
      const error = await response.json();
      return {
        success: false,
        error: error.message || 'Registration failed'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: 'Network error occurred'
    };
  }
};

export default registerUser;