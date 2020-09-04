import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import { useMutation } from '@apollo/client';
import ADD_USER from '../../../graphQL/ADD_USER';

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

	const [addUser, { loading, error, data }] = useMutation(ADD_USER, {
		onCompleted({ addUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});
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

	return (
		<View style={styles.container}>
			<Text>{token}</Text>
			<Text onPress={kakaoLogin}>Kakaotalk Login</Text>
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
