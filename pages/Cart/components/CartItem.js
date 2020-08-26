import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartItem({ item, setCartItem }) {
	const { date, foodName, servings, calories } = item;
	const [selected, setSelected] = useState(false);

	const pressHandler = () => {
		setCartItem(prevState => {
			const currentItem = prevState.find(cartItem => cartItem.id === item.id);
			currentItem.selected = !currentItem.selected;
			return [...prevState];
		});
		setSelected(prevState => !prevState);
	};

	return (
		<TouchableOpacity
			onPress={pressHandler}
			style={selected ? styles.selectedContainer : styles.unselectedContainer}
		>
			<Text style={styles.column}>{date}</Text>
			<Text style={styles.column}>{foodName}</Text>
			<Text style={styles.column}>{servings}</Text>
			<Text style={styles.column}>{calories}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	unselectedContainer: {
		flex: 1,
		backgroundColor: 'blue',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
	},
	selectedContainer: {
		flex: 1,
		backgroundColor: 'pink',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
	},
	column: {
		flex: 1,
		height: '100%',
		borderColor: 'black',
		borderWidth: 2,
	},
});
