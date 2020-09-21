import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import { useQuery } from '@apollo/client';
import { searchFoodQuery } from '../queries';

import NutritionCard from './NutritionCard';

function NutritionInfo({ homeInfo, foodImageHandler, foodIdHandler, foodCaloriesHandler }) {
	const [currentFood, setCurrentFood] = useState({});
	const nutritionMapper = () => {
		return Object.entries(currentFood)
			.filter(el => !['__typename', 'name', 'id', 'image'].includes(el[0]))
			.map((el, idx) => <NutritionCard key={idx} nutrition={el} />);
	};

	useQuery(searchFoodQuery, {
		variables: {
			name: homeInfo.foodName,
		},
		onCompleted: data => {
			if (data.foods.name !== '') {
				setCurrentFood(data.foods);
				foodImageHandler(data.foods.image);
				foodIdHandler(data.foods.id);
				foodCaloriesHandler(data.foods.calories);
			}
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView>
				{!currentFood.name ? (
					<Text style={styles.nullDisplay}>먹은 음식을 검색하세요!</Text>
				) : (
					nutritionMapper()
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 9,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		marginBottom: 10,
	},
	nullDisplay: {
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		fontSize: 25,
		fontWeight: 'bold',
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		foodImageHandler: imageUri => {
			dispatch({ type: actionTypes.FOOD_IMAGE_HANDLER, payload: imageUri });
		},
		foodIdHandler: id => {
			dispatch({ type: actionTypes.FOOD_ID_HANDLER, payload: id });
		},
		foodCaloriesHandler: calories => {
			dispatch({ type: actionTypes.FOOD_CALORIES_HANDLER, payload: calories });
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NutritionInfo);
