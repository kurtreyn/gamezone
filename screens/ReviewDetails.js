import { Button, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details</Text>
      <Button title="BACK TO HOME SCREEN" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
