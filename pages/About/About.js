import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Explanation from './components/Explanation';
import Support from './components/Support';
import Link from './components/Link';

export default function About() {
	return (
		<View style={globalStyle.page}>
			<Header pageName='Summary' />
			<View style={globalStyle.container}>
				<Explanation />
				<View style={styles.supportAndLink}>
					<Support />
					<Link />
				</View>
			</View>
			<Footer />
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
