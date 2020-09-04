import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import { useMutation } from '@apollo/client';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';

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
			<Text>{token}</Text>
			<Text onPress={kakaoLogin}>Kakaotalk Login</Text>
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
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow',
	},
});
