import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColumnLists() {
	return (
		<View style={styles.container}>
			<Text style={styles.column}>Date</Text>
			<Text style={styles.column}>Food Name</Text>
			<Text style={styles.column}>Servings</Text>
			<Text style={styles.column}>Calories</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#eee',
	},
	column: {
		flex: 1,
		textAlign: 'center',
		backgroundColor: '#ccc',
		margin: 3,
	},
});
