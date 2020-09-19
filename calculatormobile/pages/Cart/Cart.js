import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { globalStyle } from '../styles/styles';
import { connect } from 'react-redux';

import ColumnLists from './components/ColumnLists';
import CartItem from './components/CartItem';
import DeleteAndConfirm from './components/DeleteAndConfirm';
import TotalCalories from './components/TotalCalories';

function Cart({ cartInfo }) {
	return (
		<View style={globalStyle.page}>
			<View style={globalStyle.container}>
				<ColumnLists />
				<View style={styles.cartItems}>
					<ScrollView style={styles.scrollView}>
						{cartInfo.map((item, idx) => (
							<CartItem item={item} key={idx} idx={idx} />
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
