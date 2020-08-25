import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartItem({ item }) {
	const { date, foodName, servings, calories } = item;

	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.column}>{date}</Text>
			<Text style={styles.column}>{foodName}</Text>
			<Text style={styles.column}>{servings}</Text>
			<Text style={styles.column}>{calories}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
	},
	column: {
		flex: 1,
		backgroundColor: 'orange',
		height: '100%',
		borderColor: 'black',
		borderWidth: 2,
	},
});
