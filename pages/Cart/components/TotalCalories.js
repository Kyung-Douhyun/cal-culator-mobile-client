import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function TotalCalories() {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.cardContent}>Total calories: </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.2,
		backgroundColor: 'yellow',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row',
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 10,
		marginVertical: 6,
	},
	cardContent: {
		paddingHorizontal: 18,
		paddingVertical: 20,
		backgroundColor: 'pink',
	},
});
