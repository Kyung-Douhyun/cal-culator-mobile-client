import React, { useEffect } from 'react';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
import { View, Text, StyleSheet } from 'react-native';

const { URLSchemes } = AppAuth;

export default function GoogleLogin() {
	const [user, setUser] = React.useState(null);

	useEffect(() => {
		initAsync();
	}, []);

	const _syncUserWithStateAsync = async () => {
		const user = await GoogleSignIn.signInSilentlyAsync();
		setUser({ user });
	};

	const initAsync = async () => {
		await GoogleSignIn.initAsync({
			clientId: '129551562719-pnfn8u9ibnd9rot5fmi6je1lgddv6b6u.apps.googleusercontent.com',
		});
		_syncUserWithStateAsync();
	};

	const signInAsync = async () => {
		try {
			await GoogleSignIn.askForPlayServicesAsync();
			const { type, user } = await GoogleSignIn.signInAsync();
			if (type === 'success') {
				_syncUserWithStateAsync();
			}
		} catch ({ message }) {
			React.alert('login: Error:' + message);
		}
	};
	const signOutAsync = async () => {
		await GoogleSignIn.signOutAsync();
		setUser({ user: null });
	};

	const onPress = () => {
		if (user) {
			signOutAsync();
		} else {
			signInAsync();
		}
	};
	return (
		<View style={styles.container}>
			<Text onPress={onPress}>Google Login</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
	},
});
