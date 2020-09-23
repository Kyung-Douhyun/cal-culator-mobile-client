import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../pages/About/About';
import HeaderLeftLogo from './HeaderLeftLogo';

import { connect } from 'react-redux';

const Stack = createStackNavigator();

function AboutStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={{
					headerTitle: 'About',
					headerLeft: () => <HeaderLeftLogo />,
				}}
			/>
		</Stack.Navigator>
	);
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutStack);
