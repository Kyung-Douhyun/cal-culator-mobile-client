import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NutritionInfo() {
	return (
		<View style={styles.container}>
			<Text>NutritionInfo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 9,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'orange',
	},
});
