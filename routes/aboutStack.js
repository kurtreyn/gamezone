import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function AboutStack() {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#ddd',
    },
    headerTintColor: '#444',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// to hide header title: <Stack.Navigator screenOptions={{ headerShown: false }}>
