import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NaverLogin() {
	return (
		<View style={styles.container}>
			<Text>Naver Login</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgreen',
	},
});
