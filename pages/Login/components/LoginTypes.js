import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import KakaotalkLogin from './KakaotalkLogin';
import NaverLogin from './NaverLogin';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

export default function Login() {
	return (
		<View style={styles.container}>
			<KakaotalkLogin />
			<NaverLogin />
			<GoogleLogin />
			<FacebookLogin />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'silver',
	},
});
