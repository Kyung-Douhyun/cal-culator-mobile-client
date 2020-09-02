import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ReportType() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.card}>
				<Text>Chart Report</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.card}>
				<Text>Detail Report</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	card: {
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		height: '30%',
		width: '30%',
		borderRadius: 5,
	},
});
