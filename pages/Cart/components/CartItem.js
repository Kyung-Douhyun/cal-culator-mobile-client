import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartItem({ item }) {
	const { date, foodName, servings, calories } = item;
	const [selected, setSelected] = useState(false);

	const pressHandler = () => setSelected(prev => !prev);

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
