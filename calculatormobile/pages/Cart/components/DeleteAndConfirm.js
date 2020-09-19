import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function DeleteAndConfirm({ deleteCartHandler }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => {
					deleteCartHandler();
				}}
			>
				<Text>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.confirmBtn}
				onPress={() =>
					setCartItem(prevState => {
						return prevState.filter(cartItem => !cartItem.selected);
					})
				}
			>
				<Text>Confirm</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.8,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	deleteBtn: {
		width: '30%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e94560',
		borderRadius: 10,
	},
	confirmBtn: {
		width: '30%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#28df99',
		borderRadius: 10,
	},
});

const mapDispatchToProps = dispatch => {
	return {
		deleteCartHandler: () => {
			dispatch({ type: actionTypes.DEL_CART });
		},
	};
};

export default connect(null, mapDispatchToProps)(DeleteAndConfirm);
