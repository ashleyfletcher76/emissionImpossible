import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Settings</Text>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Theme</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Space for the status bar
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // for Android shadow
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});
