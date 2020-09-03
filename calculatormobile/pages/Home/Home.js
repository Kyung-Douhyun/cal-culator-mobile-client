import React, {useState} from 'react';
import {View, Modal, Text} from 'react-native';
import {globalStyle} from '../styles/styles';
import {useQuery, gql} from '@apollo/client';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Login from '../Login/Login';
import SearchBar from './components/SearchBar';
import FoodImage from './components/FoodImage';
import NutritionInfo from './components/NutritionInfo';
import SelectDateAndAdd from './components/SelectDateAndAdd';

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <View style={globalStyle.page}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={loginOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Login setLoginOpen={setLoginOpen} />
      </Modal>
      <Header pageName="Cal-culator" setLoginOpen={setLoginOpen} />
      <View style={globalStyle.container}>
        <SearchBar />
        <FoodImage />
        <NutritionInfo />
        <SelectDateAndAdd />
      </View>
      <Footer />
    </View>
  );
}
