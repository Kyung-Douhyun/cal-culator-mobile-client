import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import { useMutation } from '@apollo/client';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';
import { TouchableOpacity } from 'react-native-gesture-handler';

if (!KakaoLogins) {
	console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
	console.log(log);
	callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
	id: 'profile has not fetched',
	email: 'profile has not fetched',
	profile_image_url: '',
};
export default function KakaotalkLogin() {
	const [loginLoading, setLoginLoading] = useState(false);
	const [logoutLoading, setLogoutLoading] = useState(false);
	const [profileLoading, setProfileLoading] = useState(false);
	const [unlinkLoading, setUnlinkLoading] = useState(false);

	const [token, setToken] = useState(TOKEN_EMPTY);
	const [profile, setProfile] = useState(PROFILE_EMPTY);
	const { id, email, nickname } = profile;

	const [modal, setModal] = useState(false);
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		gender: '',
		age: null,
	});
	const [addUser] = useMutation(ADD_USER, {
		onCompleted({ addUser: { id, name, email } }) {
			console.log({ id, name, email });
			setUser({ id, email, name });
		},
	});
	const [addUserInfo] = useMutation(ADD_USER_INFO, {
		onCompleted({ addUserInfo: { id, name, email, gender, age } }) {
			console.log({ id, name, email, gender, age });
		},
	});

	const completeKakaoLogin = async () => {
		console.log(user);
		await addUserInfoHandler(user);
	};
	const kakaoLogin = async () => {
		logCallback('Login Start', setLoginLoading(true));

		KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
			.then(async result => {
				await setToken(result.accessToken);
				await getProfile();
				logCallback(`Login Finished:${JSON.stringify(result)}`, setLoginLoading(false));
			})
			.catch(err => {
				if (err.code === 'E_CANCELLED_OPERATION') {
					logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
				} else {
					logCallback(`Login Failed:${err.code} ${err.message}`, setLoginLoading(false));
				}
			});
	};

	const getProfile = () => {
		logCallback('Get Profile Start', setProfileLoading(true));

		KakaoLogins.getProfile()
			.then(async result => {
				setProfile(result);
				console.log(result.nickname);
				console.log(result.email);
				console.log(result.id);
				await addUserHandler(result);
				modalHandler();
				logCallback(`Get Profile Finished:${JSON.stringify(result)}`, setProfileLoading(false));
			})
			.catch(err => {
				logCallback(`Get Profile Failed:${err.code} ${err.message}`, setProfileLoading(false));
			});
	};

	const addUserHandler = async ({ nickname, email, id }) => {
		await addUser({
			variables: { name: nickname, email, password: id },
		});
	};
	const addUserInfoHandler = async ({ email, gender, age }) => {
		console.log({ email, gender, age });
		await addUserInfo({
			variables: { email, gender, age },
		});
	};

	const modalHandler = () => {
		setModal(prevState => !prevState);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.kakao__login} onPress={kakaoLogin}>
				<Image
					containerStyle={styles.kakao__login__icon}
					source={require('../../../asset/Image/kakao_symbol.png')}
				/>
				<Text style={styles.kakao_login_text}>Login With Kakao</Text>
			</TouchableOpacity>

			<AddUserInfoModal
				modal={modal}
				user={user}
				setUser={setUser}
				completeGoogleLogin={completeKakaoLogin}
				modalHandler={modalHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	kakao__login: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#FEE500',
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
	kakao__login__icon: {
		top: 18,
		height: 35 * 0.7,
		width: 36 * 0.7,
		marginRight: 20,
	},
	kakao_login_text: {
		fontWeight: '700',
		top: 20,
	},
});
