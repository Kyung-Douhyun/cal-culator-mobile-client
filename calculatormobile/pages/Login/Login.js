import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import LoginTypes from './components/LoginTypes';

export default function Login() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Login</Text>
			</View>
			<LoginTypes />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	closeBtnContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeBtn: {
		height: '30%',
		width: '30%',
		backgroundColor: 'gold',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
