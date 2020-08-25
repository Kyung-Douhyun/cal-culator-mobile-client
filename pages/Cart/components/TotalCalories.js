import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function TotalCalories() {
	return (
		<View style={styles.container}>
			<Text>Total calories: </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.2,
		backgroundColor: 'yellow',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
});
