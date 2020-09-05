import React from 'react';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../pages/About/About';

const Stack = createStackNavigator();

export default function AboutStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={{
					headerTitle: 'Cal-Culator!',
				}}
			/>
		</Stack.Navigator>
	);
}
