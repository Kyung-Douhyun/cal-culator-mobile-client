import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Slider } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function ConfirmModal({ homeInfo, cancelAddToCart, userInfo, addToCart, cartInfo }) {
	const [value, setValue] = useState(1);

	return (
		<View style={styles.modalContainer}>
			<View style={styles.foodNameAndDate}>
				<Text style={styles.font}>Selected Food: {homeInfo.foodName}</Text>
				<Text style={styles.font}>Selected Date: {homeInfo.selectedDate}</Text>
			</View>
			<Slider
				style={styles.slider}
				value={value}
				onValueChange={val => setValue(val)}
				maximumValue={10}
				minimumValue={1}
				step={1}
			/>
			<Text>Amount: {value}</Text>
			<View style={styles.btnContainer}>
				<TouchableOpacity style={styles.cancelBtn} onPress={() => cancelAddToCart()}>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.addToCartBtn}
					onPress={() => {
						addToCart({
							amount: value,
							date: homeInfo.selectedDate,
							foodId: homeInfo.foodId,
							userId: userInfo.userId,
							calories: homeInfo.foodCalories,
						});
						cancelAddToCart();
					}}
				>
					<Text>ADD TO CART!</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	font: {
		marginBottom: 30,
		fontSize: 20,
		fontWeight: 'bold',
	},
	foodNameAndDate: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	slider: {
		width: '70%',
	},
	btnContainer: {
		flexDirection: 'row',
		marginTop: 50,
	},
	cancelBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e94560',
		width: '30%',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 20,
	},
	addToCartBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#28df99',
		width: '30%',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 20,
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
		userInfo: state.userInfo,
		cartInfo: state.cartInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		cancelAddToCart: () => {
			dispatch({ type: actionTypes.CANCEL_ADD_TO_CART });
		},
		addToCart: data => {
			dispatch({ type: actionTypes.ADD_CART, payload: data });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
