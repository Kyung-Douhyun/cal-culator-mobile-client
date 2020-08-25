import React from 'react';
import { View, Text } from 'react-native';
import { homeStyle, globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

export default function Home() {
	return (
		<View style={globalStyle.page}>
			<Header />
			<Text style={globalStyle.container}>Container</Text>
			<Footer />
		</View>
	);
}
