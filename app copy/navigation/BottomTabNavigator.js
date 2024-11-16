import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import YourJourneysScreen from '../screens/YourJourneysScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 60, paddingBottom: 5 },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={LeaderboardScreen} // This is now correctly imported
          options={{
            tabBarLabel: 'Ranking',
            tabBarIcon: () => <Text>🏆</Text>,
          }}
        />
        <Tab.Screen
          name="YourJourneys"
          component={YourJourneysScreen}
          options={{
            tabBarLabel: 'Journeys',
            tabBarIcon: () => <Text>🗺️</Text>,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => <Text>⚙️</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
