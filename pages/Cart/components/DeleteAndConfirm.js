import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function DeleteAndConfirm({ setCartItem }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() =>
					setCartItem(prevState => {
						return prevState.filter(cartItem => !cartItem.selected);
					})
				}
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
		backgroundColor: 'lightgreen',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	deleteBtn: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	confirmBtn: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'darkgreen',
	},
});
