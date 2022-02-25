import {
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails');
  //   // COULD ALSO USE:
  //   // navigation.push('ReviewDetails');
  // };

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: 1,
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: 2,
    },
    { title: 'Not So Final Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
  ]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            // PASSING DATA BETWEEN SCREENS - STACK NAVIGATION
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Text style={globalStyles.titleText}>Home screen</Text> */}
      {/* <Button title="GO TO REVIEW DETAILS" onPress={pressHandler} /> */}
    </SafeAreaView>
  );
};

export default Home;
