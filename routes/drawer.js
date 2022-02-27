import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#ddd',
    },
    headerTintColor: '#444',
  };

  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
        options={{ title: 'GameZone' }}
      />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
