import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
