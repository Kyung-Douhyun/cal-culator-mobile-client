import React from 'react';
import { View, Text } from 'react-native';
import { homeStyle, globalStyle } from '../styles/styles';

export default function Home() {
	return (
		<View style={globalStyle.page}>
			<Text style={globalStyle.header}>Header</Text>
			<Text style={globalStyle.container}>Container</Text>
			<Text style={globalStyle.footer}>Footer</Text>
		</View>
	);
}
