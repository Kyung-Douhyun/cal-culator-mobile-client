import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import { globalStyle } from '../styles/styles';
import Login from '../Login/Login';
import SearchBar from './components/SearchBar';
import FoodImage from './components/FoodImage';
import NutritionInfo from './components/NutritionInfo';
import SelectDateAndAdd from './components/SelectDateAndAdd';

export default function Home() {
	const [loginOpen, setLoginOpen] = useState(false);
	return (
		<View style={globalStyle.page}>
			<Modal animationType='slide' transparent={false} visible={loginOpen}>
				<Login setLoginOpen={setLoginOpen} />
			</Modal>
			<View style={globalStyle.container}>
				<SearchBar />
				<FoodImage />
				<NutritionInfo />
				<SelectDateAndAdd />
			</View>
		</View>
	);
}
