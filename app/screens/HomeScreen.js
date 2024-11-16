import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function HomeScreen() {
  const userName = 'John Doe';
  const ecoScore = 82;

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/Heilbronn_clean.jpg')}
        style={styles.bannerImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userScore}>Eco Score: {ecoScore}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight + 10,
  },
  bannerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  userInfo: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userScore: {
    fontSize: 20,
    marginTop: 10,
    color: '#4caf50',
  },
});
