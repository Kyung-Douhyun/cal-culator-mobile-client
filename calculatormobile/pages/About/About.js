import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/styles';
import Support from './components/Support';
import Link from './components/Link';
import AboutApp from './components/AboutApp';
import Login from '../About/components/Login';

export default function About() {
	return (
		<View style={globalStyle.page}>
			<View style={styles.userInfo}>
				<Login />
			</View>
			<View style={styles.supportAndLink}>
				<Support />
				<AboutApp />
				<Link />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	userInfo: {
		flex: 9,
	},
	supportAndLink: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
