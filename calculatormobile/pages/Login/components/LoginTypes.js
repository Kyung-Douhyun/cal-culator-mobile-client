import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import KakaotalkLogin from './KakaotalkLogin';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import FirebaseEmail from './FirebaseEmail';
import CloseLoginModal from './CloseLoginModal';

export default function Login() {
	const [visible, setVisible] = useState(false);
	const [logined, setLogined] = useState(false);
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const firebaseLogout = () => {
		auth()
			.signOut()
			.then(() => console.log('User signed out!'));
	};
	return (
		<View style={styles.container}>
			{!logined ? (
				<TouchableOpacity onPress={toggleOverlay} style={styles.login__logout}>
					<Text style={styles.login__logout__text}>로그인</Text>
					<Overlay overlayStyle={styles.login__modal} isVisible={visible}>
						<KakaotalkLogin />
						<GoogleLogin />
						<FacebookLogin />
						<FirebaseEmail />
						<CloseLoginModal toggleOverlay={toggleOverlay} />
					</Overlay>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={firebaseLogout} style={styles.login__logout}>
					<Text style={styles.login__logout__text}>로그아웃</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	login__logout: {
		height: 60,
		justifyContent: 'center',
		width: 300,
		backgroundColor: '#fefe',
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
	login__logout__text: {
		fontSize: 20,
		textAlign: 'center',
	},
	login__modal: {
		height: 400,
		borderRadius: 12,
		backgroundColor: 'rgba(255,255,255,0.5)',
	},
});
