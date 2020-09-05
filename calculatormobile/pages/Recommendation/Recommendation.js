import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../styles/styles';

import RecommendContainer from './components/RecommendContainer';
import EatOrNotBtn from './components/EatOrNotBtn';

export default function Recommendation() {
	return (
		<View style={globalStyle.page}>
			<View style={globalStyle.container}>
				<RecommendContainer />
				<EatOrNotBtn />
			</View>
		</View>
	);
}
