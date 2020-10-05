import React, { useState } from 'react';
import { View } from 'react-native';
import { globalStyle } from '../styles/styles';

import RecommendContainer from './components/RecommendContainer';
import EatOrNotBtn from './components/EatOrNotBtn';

export default function Recommendation() {
	const [isDoEat, setIsDoEat] = useState(true);

	return (
		<View style={globalStyle.page}>
			<View style={globalStyle.container}>
				<RecommendContainer isDoEat={isDoEat} />
				<EatOrNotBtn setIsDoEat={setIsDoEat} />
			</View>
		</View>
	);
}
