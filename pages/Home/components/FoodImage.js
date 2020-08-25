import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodImage() {
	return (
		<View style={styles.container}>
			<Text>FoodImage</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 4,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'blue',
		marginBottom: 10,
	},
});
