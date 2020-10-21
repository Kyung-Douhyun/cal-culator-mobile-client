import React from 'react';
import { Button, alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../pages/About/About';
import EmailLogin from '../pages/About/components/loginComponents/EmailLogin';
import EmailRegister from '../pages/About/components/loginComponents/EmailRegister';
import AdditionalUserInfo from '../pages/About/components/loginComponents/AdditionalUserInfo';
import HeaderLeftLogo from './HeaderLeftLogo';
import { HeaderBackButton } from '@react-navigation/stack';
import { useMutation } from '@apollo/client';
import DELETE_USER from '../graphQL/DELETE_USER';

import { connect } from 'react-redux';

const Stack = createStackNavigator();

function AboutStack({ navigation }) {
	const [deleteUser] = useMutation(DELETE_USER, {
		onCompleted({ deleteUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});
	const deleteUserHandler = async ({ email }) => {
		await deleteUser({
			variables: { email },
		});
	};
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='About'
				component={About}
				options={{
					headerTitle: 'ABOUT',
					headerLeft: () => <HeaderLeftLogo />,
				}}
			/>
			<Stack.Screen
				name='EmailLogin'
				component={EmailLogin}
				options={{
					headerTitle: 'LOGIN',
				}}
			/>
			<Stack.Screen
				name='EmailRegister'
				component={EmailRegister}
				options={{
					headerTitle: 'REGISTER',
				}}
			/>
			<Stack.Screen
				name='AdditionalUserInfo'
				component={AdditionalUserInfo}
				options={{
					headerTitle: 'KAKAOLOGIN',
					// headerLeft: () => console.log('BACK'),
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
