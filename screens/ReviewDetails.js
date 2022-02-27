import { Image, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles, images } from '../styles/global';
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
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#bbb',
  },
});

export default ReviewDetails;
