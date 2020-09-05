import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Summary from '../pages/Summary/Summary';

const Stack = createStackNavigator();

export default function SummaryStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Summary' component={Summary} options={{ title: 'Summary' }} />
		</Stack.Navigator>
	);
}
