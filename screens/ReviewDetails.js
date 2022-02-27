import { Button, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = ({ route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  // PASSING DATA BETWEEN SCREENS - STACK NAVIGATION
  const { title } = route.params;
  const { body } = route.params;
  const { rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
        {/* <Button title="BACK TO HOME SCREEN" onPress={pressHandler} /> */}
      </Card>
    </View>
  );
};

export default ReviewDetails;
