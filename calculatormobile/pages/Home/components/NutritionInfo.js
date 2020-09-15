import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import { useQuery } from '@apollo/client';
import { searchFoodQuery } from '../queries';

import NutritionCard from './NutritionCard';

function NutritionInfo({ homeInfo, foodImageHandler, foodIdHandler }) {
	const [currentFood, setCurrentFood] = useState({});

	const nutritionMapper = () => {
		return Object.entries(currentFood)
			.filter(el => !['__typename', 'name', 'id', 'image'].includes(el[0]))
			.map((el, idx) => <NutritionCard key={idx} nutrition={el} />);
	};

	const { loading, data } = useQuery(searchFoodQuery, {
		variables: {
			name: homeInfo.foodName,
		},
		onCompleted: data => {
			setCurrentFood(data.foods);
			if (data.foods.name !== '') {
				foodImageHandler(data.foods.image);
				foodIdHandler(data.foods.id);
			}
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView>
				{!currentFood.name ? <Text>Search your food!</Text> : nutritionMapper()}
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
		backgroundColor: 'orange',
		marginBottom: 10,
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
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NutritionInfo);
