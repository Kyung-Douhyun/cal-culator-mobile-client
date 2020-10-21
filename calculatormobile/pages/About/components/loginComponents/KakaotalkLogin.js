import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import axios from 'axios';
// import { useMutation } from '@apollo/client';
// import ADD_USER from '../../../graphQL/ADD_USER';
// import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';
// import DELETE_USER from '../../../graphQL/DELETE_USER';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

// if (!KakaoLogins) {
// 	console.error('Module is Not Linked');
// }

const logCallback = (log, callback) => {
	console.log(log);
	callback;
};

// const TOKEN_EMPTY = 'token has not fetched';
// const PROFILE_EMPTY = {
// 	id: 'profile has not fetched',
// 	email: 'profile has not fetched',
// 	profile_image_url: '',
// };
function KakaotalkLogin({
	navigatingAdditionalUserInfo,
	loginMenuHandler,
	registerHandler,
	userInfoHandler,
	loginStateHandler,
}) {
	// const [loginLoading, setLoginLoading] = useState(false);
	// const [logoutLoading, setLogoutLoading] = useState(false);
	// const [profileLoading, setProfileLoading] = useState(false);
	// const [unlinkLoading, setUnlinkLoading] = useState(false);

	// const [token, setToken] = useState(TOKEN_EMPTY);
	// const [profile, setProfile] = useState(PROFILE_EMPTY);
	// const { id, email, nickname } = profile;

	// const [modal, setModal] = useState(false);
	// const [user, setUser] = useState({
	// 	id: '',
	// 	name: '',
	// 	email: '',
	// 	gender: '',
	// 	age: null,
	// });

	// const [addUser] = useMutation(ADD_USER, {
	// 	onCompleted({ addUser: { id, name, email } }) {
	// 		console.log({ id, name, email });
	// 		setUser({ id, email, name });
	// 	},
	// });

	// const [addUserInfo] = useMutation(ADD_USER_INFO, {
	// 	onCompleted({ addUserInfo: { id, name, email, gender, age } }) {
	// 		console.log({ id, name, email, gender, age });
	// 	},
	// });

	// const [deleteUser] = useMutation(DELETE_USER, {
	// 	onCompleted({ deleteUser: { id, name, email } }) {
	// 		console.log({ id, name, email });
	// 	},
	// });
	const loginHandler = result => {
		axios
			.post('http://localhost:4001/auth/login', { email: result.email, password: result.id })
			.then(res => {
				userInfoHandler({
					id: res.data._id,
					email: res.data.email,
					name: res.data.name,
					age: res.data.age,
					gender: res.data.gender,
				});
				loginStateHandler();
				console.log('USER LOGIN!');
			})
			.catch(error => {
				console.error(error);
			});
	};

	const findUserHandler = result => {
		console.log(result);
		axios
			.post('http://localhost:4001/auth/findUser', { email: result.email })
			.then(async res => {
				if (res.status === 201) {
					await registerHandler({ id: result.id, email: result.email, name: result.nickname });
					await loginMenuHandler();
					navigatingAdditionalUserInfo();
				} else if (res.status === 200) {
					loginMenuHandler();
					loginHandler(result);
				}
			})
			.catch(error => {
				console.log('MONGODB ERROR');
				console.error(error);
			});
	};

	const kakaoLogin = async () => {
		// logCallback('Login Start', setLoginLoading(true));
		logCallback('Login Start');

		KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
			.then(async result => {
				// await setToken(result.accessToken);
				await getProfile();
				// logCallback(`Login Finished:${JSON.stringify(result)}`, setLoginLoading(false));
				logCallback(`Login Finished:${JSON.stringify(result)}`);
			})
			.catch(err => {
				if (err.code === 'E_CANCELLED_OPERATION') {
					// logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
					logCallback(`Login Cancelled:${err.message}`);
				} else {
					// logCallback(`Login Failed:${err.code} ${err.message}`, setLoginLoading(false));
					logCallback(`Login Failed:${err.code} ${err.message}`);
				}
			});
	};

	const getProfile = () => {
		// logCallback('Get Profile Start', setProfileLoading(true));
		logCallback('Get Profile Start');

		KakaoLogins.getProfile()
			.then(async result => {
				// setProfile(result);
				findUserHandler(result);
				// await registerHandler({ id: result.id, email: result.email, name: result.nickname });
				// loginMenuHandler();
				// navigatingAdditionalUserInfo();
				// logCallback(`Get Profile Finished:${JSON.stringify(result)}`, setProfileLoading(false));
				logCallback(`Get Profile Finished:${JSON.stringify(result)}`);
			})
			.catch(err => {
				// logCallback(`Get Profile Failed:${err.code} ${err.message}`, setProfileLoading(false));
				logCallback(`Get Profile Failed:${err.code} ${err.message}`);
			});
	};

	// const addUserHandler = async ({ nickname, email, id }) => {
	// 	await addUser({
	// 		variables: { name: nickname, email, password: id },
	// 	});
	// };

	// const addUserInfoHandler = async ({ email, gender, age }) => {
	// 	console.log({ email, gender, age });
	// 	await addUserInfo({
	// 		variables: { email, gender, age },
	// 	});
	// };
	// const completeKakaoLogin = async () => {
	// 	console.log(user);
	// 	await addUserInfoHandler(user);
	// };
	// const deleteUserHandler = async ({ email }) => {
	// 	await deleteUser({
	// 		variables: { email },
	// 	});
	// };

	return (
		<View style={styles.container}>
			<Button title='카카오' type='outline' raised onPress={kakaoLogin} />
		</View>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		loginStateHandler: () => {
			dispatch({ type: actionTypes.LOGIN });
		},
		userInfoHandler: type => {
			dispatch({ type: actionTypes.USER, payload: type });
		},
		registerHandler: type => {
			dispatch({ type: actionTypes.REGISTER, payload: type });
		},
	};
};

export default connect(null, mapDispatchToProps)(KakaotalkLogin);

const styles = StyleSheet.create({
	// container: {
	// 	flex: 0.25,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// kakao__login: {
	// 	height: 60,
	// 	flexDirection: 'row',
	// 	justifyContent: 'center',
	// 	alignSelf: 'center',
	// 	width: 300,
	// 	backgroundColor: '#FEE500',
	// 	borderRadius: 12,
	// 	shadowColor: '#000',
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 5,
	// 	},
	// 	shadowOpacity: 0.34,
	// 	shadowRadius: 6.27,
	// 	elevation: 10,
	// },
	// kakao__login__icon: {
	// 	top: 18,
	// 	height: 35 * 0.7,
	// 	width: 36 * 0.7,
	// 	marginRight: 20,
	// },
	// kakao_login_text: {
	// 	fontWeight: '700',
	// 	top: 20,
	// },
});
