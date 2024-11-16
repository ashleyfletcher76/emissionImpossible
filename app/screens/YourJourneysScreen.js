import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function YourJourneyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Journey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // White background
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',  // Dark text color
  },
});
