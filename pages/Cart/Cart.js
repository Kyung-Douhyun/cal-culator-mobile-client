import React from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import ColumnLists from './components/ColumnLists';

export default function Cart() {
	const dummyData = [
		{ dat: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 5, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0 },
		{ dat: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0 },
	];
	return (
		<View style={globalStyle.page}>
			<Header pageName='Cart' />
			<View style={globalStyle.container}>
				<ColumnLists />
			</View>
			<Footer />
		</View>
	);
}
