import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#ddd',
    },
    headerTintColor: '#444',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'GameZone' }}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
}

// to hide header title: <Stack.Navigator screenOptions={{ headerShown: false }}>
