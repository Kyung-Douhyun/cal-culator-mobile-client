import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function CloseLoginModal({ toggleOverlay }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.closeLoginModal} onPress={toggleOverlay}>
				<Text style={styles.closeLoginModal__text}>CLOSE</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeLoginModal: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#FFFFFF',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	closeLoginModal__text: {
		fontWeight: '700',
		top: 20,
		color: '#000000',
	},
});
