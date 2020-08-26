import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import ColumnLists from './components/ColumnLists';
import CartItem from './components/CartItem';
import DeleteAndConfirm from './components/DeleteAndConfirm';
import TotalCalories from './components/TotalCalories';

export default function Cart() {
	const [cartItem, setCartItem] = useState([
		{ date: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0, id: 1, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0, id: 2, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0, id: 3, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0, id: 4, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 5, calories: 500.0, id: 5, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 4, calories: 500.0, id: 6, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 3, calories: 500.0, id: 7, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 2, calories: 500.0, id: 8, selected: false },
		{ date: '2020-01-01', foodName: 'pasta', servings: 1, calories: 500.0, id: 9, selected: false },
	]);

	return (
		<View style={globalStyle.page}>
			<Header pageName='Cart' />
			<View style={globalStyle.container}>
				<ColumnLists />
				<View style={styles.cartItems}>
					<ScrollView style={styles.scrollView}>
						{cartItem.map(item => (
							<CartItem item={item} key={item.id} setCartItem={setCartItem} />
						))}
					</ScrollView>
				</View>
			</View>
			<TotalCalories />
			<DeleteAndConfirm setCartItem={setCartItem} />
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	cartItems: {
		flex: 11,
	},
	scrollView: {
		backgroundColor: 'red',
	},
});
