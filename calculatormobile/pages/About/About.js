import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/styles';
import Explanation from './components/Explanation';
import Support from './components/Support';
import Link from './components/Link';

export default function About() {
	return (
		<View style={globalStyle.page}>
			<View style={globalStyle.container}>
				<Explanation />
				<View style={styles.supportAndLink}>
					<Support />
					<Link />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	supportAndLink: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: 'gold',
		marginHorizontal: 10,
	},
});
