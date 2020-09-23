import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import FirebaseEmailLogin from './FirabaseEmailLogin';
import FirebaseEmailRegister from './FirebaseEmailRegister';

export default function FirebaseEmail({ refetch }) {
	const [loginModal, setLoginModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);

	const loginModalHandler = () => {
		setLoginModal(prevState => !prevState);
	};

	const registerModalHandler = () => {
		setLoginModal(false);
		setRegisterModal(prevState => !prevState);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.email__login} onPress={loginModalHandler}>
				<Icon
					containerStyle={styles.email__login__icon}
					name='email'
					size={30}
					iconStyle={{ color: '#FFFFFF' }}
					type='material-community'
				/>
				<Text style={styles.email__login__text}>Login With Email</Text>
			</TouchableOpacity>
			<View>
				<View>
					<FirebaseEmailLogin
						loginModal={loginModal}
						registerModalHandler={registerModalHandler}
						loginModalHandler={loginModalHandler}
						refetch={refetch}
					/>
				</View>
				<View>
					<FirebaseEmailRegister
						registerModal={registerModal}
						registerModalHandler={registerModalHandler}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	email__login: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#87B672',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	email__login__icon: {
		marginRight: 20,
		top: 14,
	},
	email__login__text: {
		fontWeight: '700',
		top: 20,
		color: '#FFFFFF',
	},
});
