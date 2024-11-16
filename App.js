import React from 'react';
import Toast from 'react-native-toast-message';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <>
      <AuthNavigator />
      <Toast />
    </>
  );
}
