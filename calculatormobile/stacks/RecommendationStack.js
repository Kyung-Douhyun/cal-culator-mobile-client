import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recommendation from '../pages/Recommendation/Recommendation';

const Stack = createStackNavigator();

export default function RecommendationStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Recommendation'
				component={Recommendation}
				options={{ title: 'Recommendation' }}
			/>
		</Stack.Navigator>
	);
}
