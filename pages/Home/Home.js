import React from 'react';
import { View, Text } from 'react-native';
import { homeStyle, globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import SearchBar from './components/SearchBar';
import FoodImage from './components/FoodImage';
import NutritionInfo from './components/NutritionInfo';
import SelectDateAndAdd from './components/SelectDateAndAdd';

export default function Home() {
	return (
		<View style={globalStyle.page}>
			<Header />
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
