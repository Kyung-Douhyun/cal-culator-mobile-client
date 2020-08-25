import React from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

export default function Cart() {
	return (
		<View style={globalStyle.page}>
			<Header pageName='Cart' />
			<View style={globalStyle.container}>
				<Text> this is cart page</Text>
			</View>
			<Footer />
		</View>
	);
}
