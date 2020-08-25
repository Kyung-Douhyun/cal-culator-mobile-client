import React from 'react';
import { View, Text } from 'react-native';
import { homeStyle, globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
export default function Home() {
	return (
		<View style={globalStyle.page}>
			<Header />
			<Text style={globalStyle.container}>Container</Text>
			<Text style={globalStyle.footer}>Footer</Text>
		</View>
	);
}
