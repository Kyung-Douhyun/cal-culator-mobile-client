import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Overlay } from 'react-native-elements';

// import auth from '@react-native-firebase/auth';
import KakaotalkLogin from '../About/components/loginComponents/KakaotalkLogin';
// import FacebookLogin from './FacebookLogin';
// import GoogleLogin from '../../../temp/GoogleLogin';
import Email from '../About/components/loginComponents/Email';
// import CloseLoginModal from './CloseLoginModal';

// import { useMutation } from '@apollo/client';
// import LOGOUT from '../../../graphQL/LOGOUT';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import axios from 'axios';

function LoginTypes({ userInfo, isLoginHandler, userInfoHandler, curUser, setCurUser }) {
	// const [logout] = useMutation(LOGOUT);
	const [visible, setVisible] = useState(false);
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	// const firebaseLogout = () => {
	// 	auth()
	// 		.signOut()
	// 		.then(async () => {
	// 			await logout({
	// 				variables: { id: userInfo.userId },
	// 			});
	// 			isLoginHandler();
	// 			toggleOverlay();
	// 			setCurUser({
	// 				...curUser,
	// 				id: '',
	// 				name: '',
	// 				email: '',
	// 				gender: '',
	// 				age: 0,
	// 				height: 0,
	// 				weight: 0,
	// 			});
	// 			console.log('User signed out!');
	// 		});
	// };

	const emailLogout = () => {
		axios.post('http://localhost:4001/auth/logout', { id: userInfo.userId }).then(res => {
			if (res) {
				isLoginHandler();
				setVisible(false);
				console.log(userInfo);
				console.log('User signed out!');
			}
		});
	};

	// useEffect(() => console.log('userInfo :', userInfo), []);
	// useEffect(() => console.log('userId :', userId), []);
	// useFocusEffect(
	// 	useCallback(() => {
	// 		loginedUser();
	// 	}, [curUser]),
	// );

	if (!userInfo.isLogin) {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={toggleOverlay} style={styles.login__logout}>
					<Text style={styles.login__logout__text}>로그인 / 회원가입</Text>
					<View>
						<Overlay animationType='slide' overlayStyle={styles.login__modal} isVisible={visible}>
							<KakaotalkLogin />
							{/* <GoogleLogin />
							<FacebookLogin /> */}
							<Email />
							{/* <CloseLoginModal toggleOverlay={toggleOverlay} /> */}
							<TouchableOpacity style={styles.closeLoginModal} onPress={toggleOverlay}>
								<Text style={styles.closeLoginModal__text}>CLOSE</Text>
							</TouchableOpacity>
						</Overlay>
					</View>
				</TouchableOpacity>
			</View>
		);
	} else {
		return (
			<TouchableOpacity style={styles.container}>
				<TouchableOpacity onPress={emailLogout} style={styles.login__logout}>
					<Text style={styles.login__logout__text}>로그아웃</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		isLoginHandler: () => {
			dispatch({ type: actionTypes.LOGOUT });
		},
		userInfoHandler: type => {
			dispatch({ type: actionTypes.USER, payload: type });
		},
		// loginedUserHandler: curUser => {
		// 	dispatch({ type: actionTypes.USER, payload: { curUser } });
		// },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginTypes);

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
		backgroundColor: '#ffffff',
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
	closeLoginModal: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#FFFFFF',
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
	closeLoginModal__text: {
		fontWeight: '700',
		top: 20,
		color: '#000000',
	},
});
