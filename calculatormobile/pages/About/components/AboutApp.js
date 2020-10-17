import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function AboutApp() {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.aboutApp}>
				<Text style={styles.aboutApp__text}>About APP</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	aboutApp: {
		height: 60,
		justifyContent: 'center',
		width: 300,
		backgroundColor: '#ffffff',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
		alignSelf: 'center',
	},
	aboutApp__text: {
		fontSize: 20,
		textAlign: 'center',
	},
});
