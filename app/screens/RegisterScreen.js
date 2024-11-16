// screens/RegisterScreen.js
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const { width, height } = Dimensions.get('window');

// In RegisterScreen.js
const handleRegister = async () => {
  const result = await registerUser(username, password, homeCity);
  
  if (result.success) {
    // Handle successful registration
    console.log(result.data.message);
    navigation.navigate('Login');
  } else {
    // Handle error
    Alert.alert('Error', result.error);
  }
};

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const handleRegister = async () => {
    console.log(`${username} ${password} ${homeCity}`);

    if (!username || !password || !homeCity) {
      console.log("Please fill all fields");
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsLoading(true);

    registerUser(username, password, homeCity).then(res => {
      console.log(res);

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Registration completed!',
        visibilityTime: 2000,
        onHide: () => navigation.navigate('Login')
      });

      setIsLoading(false);
    }).catch(err => {
      console.log("error", err)
      setIsLoading(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>EMI</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Home City"
            value={homeCity}
            onChangeText={setHomeCity}
          />

          <TouchableOpacity 
            style={[
              styles.registerButton, 
              isLoading && styles.disabledButton
            ]}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Registering...' : 'Register'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: width * 0.08,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 0.7,
    paddingHorizontal: width * 0.1,
  },
  input: {
    width: '100%',
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: height * 0.02,
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: height * 0.03,
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  }
});