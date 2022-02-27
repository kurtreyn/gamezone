import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#ddd',
      height: 60,
    },
    headerTintColor: '#444',
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}

// to hide header title: <Stack.Navigator screenOptions={{ headerShown: false }}>
