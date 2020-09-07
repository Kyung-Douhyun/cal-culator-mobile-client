import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoginTypes from './components/LoginTypes';

export default function Login() {
	return (
		<View style={styles.container}>
			<View style={styles.user}></View>
			<View style={styles.login__logout}>
				<LoginTypes />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	user: {
		flex: 8,
		backgroundColor: 'lightgreen',
	},
	login__logout: {
		backgroundColor: 'pink',
		flex: 2,
	},
});
