import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import RecommendContainer from './components/RecommendContainer';
import EatOrNotBtn from './components/EatOrNotBtn';

export default function Recommendation() {
	return (
		<View style={globalStyle.page}>
			<Header pageName='Recommendation' />
			<View style={globalStyle.container}>
				<RecommendContainer />
			</View>
			<EatOrNotBtn />
			<Footer />
		</View>
	);
}
