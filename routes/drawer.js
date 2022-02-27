import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native';
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
        options={{
          headerTitle: () => (
            <ImageBackground
              source={require('../assets/game_bg.png')}
              style={styles.header}
            >
              <View style={styles.headerTitle}>
                <Image
                  style={styles.headerImage}
                  source={require('../assets/heart_logo.png')}
                  headerTitle="GameZone"
                />
                <Text style={styles.headerText}>GameZone</Text>
              </View>
            </ImageBackground>
          ),
        }}
      />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RootDrawerNavigator;
