import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import KakaotalkLogin from './KakaotalkLogin';
import NaverLogin from './NaverLogin';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import FirebaseEmail from './FirebaseEmail';

export default function Login() {
	const logout = () => {
		auth()
			.signOut()
			.then(() => console.log('User signed out!'));
	};
	return (
		<View style={styles.container}>
			<KakaotalkLogin />
			<NaverLogin />
			<GoogleLogin />
			<FacebookLogin />
			<FirebaseEmail />
			<View style={{ borderColor: 'black', borderWidth: 1 }}>
				<Text onPress={logout}>로그아웃</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'silver',
	},
});
