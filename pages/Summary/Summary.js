import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import DWMButtons from './components/DWMButtons';
import Chart from './components/Chart';

export default function Summary() {
	return (
		<View style={globalStyle.page}>
			<Header pageName='Summary' />
			<View style={{ flex: 8 }}>
				<DWMButtons />
				<Chart />
			</View>
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({});
