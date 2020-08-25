import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import ColumnLists from './components/ColumnLists';
import CartItem from './components/CartItem';
import DeleteAndConfirm from './components/DeleteAndConfirm';

export default function Cart() {
	const dummyData = [
		{ date: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 5, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0 },
		{ date: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0 },
	];
	return (
		<View style={globalStyle.page}>
			<Header pageName='Cart' />
			<View style={globalStyle.container}>
				<ColumnLists />
				<View style={styles.cartItems}>
					{dummyData.map((item, idx) => (
						<CartItem item={item} key={idx} />
					))}
				</View>
			</View>
			<DeleteAndConfirm />
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	cartItems: {
		flex: 11,
	},
});
