import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DWMButton() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: 'green' }}>
				<Text>Daily</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: 'blue' }}>
				<Text>Weekly</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: 'yellow' }}>
				<Text>Monthly</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		marginBottom: 10,
	},
	btn: {
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
