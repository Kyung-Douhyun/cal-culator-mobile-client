import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

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
	const kakaoLogin = async () => {
		logCallback('Login Start', setLoginLoading(true));

		KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
			.then(async result => {
				await setToken(result.accessToken);
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

	const kakaoLogout = () => {
		logCallback('Logout Start', setLogoutLoading(true));

		KakaoLogins.logout()
			.then(result => {
				setToken(TOKEN_EMPTY);
				setProfile(PROFILE_EMPTY);
				logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
			})
			.catch(err => {
				logCallback(`Logout Failed:${err.code} ${err.message}`, setLogoutLoading(false));
			});
	};

	const getProfile = () => {
		logCallback('Get Profile Start', setProfileLoading(true));

		KakaoLogins.getProfile()
			.then(result => {
				setProfile(result);
				logCallback(`Get Profile Finished:${JSON.stringify(result)}`, setProfileLoading(false));
			})
			.catch(err => {
				logCallback(`Get Profile Failed:${err.code} ${err.message}`, setProfileLoading(false));
			});
	};

	const unlinkKakao = () => {
		logCallback('Unlink Start', setUnlinkLoading(true));

		KakaoLogins.unlink()
			.then(result => {
				setToken(TOKEN_EMPTY);
				setProfile(PROFILE_EMPTY);
				logCallback(`Unlink Finished:${result}`, setUnlinkLoading(false));
			})
			.catch(err => {
				logCallback(`Unlink Failed:${err.code} ${err.message}`, setUnlinkLoading(false));
			});
	};

	const { id, email, profile_image_url: photo } = profile;
	return (
		<View style={styles.container}>
			<Text>{token}</Text>
			<Text onPress={kakaoLogin}>Kakaotalk Login</Text>
			<Text onPress={kakaoLogout}>Kakaotalk Logout</Text>
			<Text onPress={unlinkKakao}>Kakaotalk Unlink</Text>
			<Text onPress={getProfile}>Kakaotalk Profile</Text>
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
