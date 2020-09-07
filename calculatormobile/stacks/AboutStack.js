import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import HeaderRightIcon from './HeaderRightIcon';
import HeaderLeftLogo from './HeaderLeftLogo';

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={{
					headerTitle: 'About',
					headerRight: () => <HeaderRightIcon navigation={navigation} />,
					headerLeft: () => <HeaderLeftLogo />,
				}}
			/>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{
					headerTitle: 'Setting',
				}}
			/>
		</Stack.Navigator>
	);
}
