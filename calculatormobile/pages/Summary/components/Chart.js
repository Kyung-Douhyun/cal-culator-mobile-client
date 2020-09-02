import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Chart() {
	return (
		<View style={styles.container}>
			<Text style={styles.chart}>Chart.js 여기 들어감</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gray',
	},
	chart: {
		height: '95%',
		width: '95%',
		backgroundColor: 'yellow',
	},
});
