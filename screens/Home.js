import { SafeAreaView, Text, View, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // COULD ALSO USE:
    // navigation.push('ReviewDetails');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="GO TO REVIEW DETAILS" onPress={pressHandler} />
    </SafeAreaView>
  );
};

export default Home;
