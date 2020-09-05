import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../pages/Cart/Cart';

const Stack = createStackNavigator();

export default function CartStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />
		</Stack.Navigator>
	);
}
