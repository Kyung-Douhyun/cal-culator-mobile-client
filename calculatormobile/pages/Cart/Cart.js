import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { globalStyle } from '../styles/styles';
import { connect } from 'react-redux';

import ColumnLists from './components/ColumnLists';
import CartItem from './components/CartItem';
import DeleteAndConfirm from './components/DeleteAndConfirm';
import TotalCalories from './components/TotalCalories';

function Cart({ cartInfo }) {
	console.log(cartInfo);
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
			<View style={globalStyle.container}>
				<ColumnLists />
				<View style={styles.cartItems}>
					<ScrollView style={styles.scrollView}>
						{cartInfo.map((item, idx) => (
							<CartItem item={item} key={idx} />
						))}
					</ScrollView>
				</View>
				<TotalCalories />
				<DeleteAndConfirm />
			</View>
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

const mapStateToProps = state => {
	return {
		cartInfo: state.cartInfo,
	};
};

export default connect(mapStateToProps)(Cart);
