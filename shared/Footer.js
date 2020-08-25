import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../pages/styles/styles';

export default function Footer() {
	return (
		<View style={globalStyle.footer}>
			<Text>Calculator</Text>
			<Text>Cart</Text>
			<Text>Summary</Text>
			<Text>Recommendation</Text>
			<Text>About</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		position: 'absolute',
		left: 0,
		paddingLeft: 15,
		paddingBottom: 15,
		fontWeight: 'bold',
	},
	currentPage: {
		paddingBottom: 15,
		fontWeight: 'bold',
	},
	signInOut: {
		position: 'absolute',
		right: 0,
		paddingBottom: 15,
		paddingRight: 15,
		fontWeight: 'bold',
	},
});
