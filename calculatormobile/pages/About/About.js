import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { globalStyle } from '../styles/styles';
import UserInfo from './components/userInfoComponents/UserInfo';
import KakaotalkLogin from './components/loginComponents/KakaotalkLogin';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

function About({ navigation, userInfo, isLoginHandler }) {
	const [loginMenuOverlay, setLoginMenuOverlay] = useState(false);

	const loginMenuHandler = () => {
		setLoginMenuOverlay(!loginMenuOverlay);
	};

	const navigatingEmailLogin = () => {
		navigation.navigate('EmailLogin');
		loginMenuHandler();
	};

	const navigatingAdditionalUserInfo = () => {
		navigation.navigate('AdditionalUserInfo');
	};

	const logoutHandler = () => {
		axios
			.post('http://localhost:4001/auth/logout', { id: userInfo.userId })
			.then(res => {
				if (res.status === 200) {
					isLoginHandler();
					console.log('LOGOUT');
				}
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<View style={globalStyle.page}>
			<View style={styles.userInfo}>
				<UserInfo />
			</View>
			<View>
				{!userInfo.isLogin ? (
					<Button
						containerStyle={{ width: 200, alignSelf: 'center' }}
						buttonStyle={{ borderColor: 'rgba(0,0,0,0.5)' }}
						titleStyle={{ color: 'rgba(0,0,0,1)' }}
						title='LOGIN / REGISTER'
						type='outline'
						raised
						onPress={loginMenuHandler}
					/>
				) : (
					<Button
						containerStyle={{ width: 200, alignSelf: 'center' }}
						buttonStyle={{ borderColor: 'rgba(0,0,0,0.5)' }}
						titleStyle={{ color: 'rgba(0,0,0,1)' }}
						title='LOGOUT'
						type='outline'
						raised
						onPress={logoutHandler}
					/>
				)}
				<Button
					containerStyle={{ width: 200, alignSelf: 'center' }}
					buttonStyle={{ borderColor: 'rgba(0,0,0,0.5)' }}
					titleStyle={{ color: 'rgba(0,0,0,1)' }}
					title='CAL-CULATOR?'
					type='outline'
					raised
					onPress={() => console.log(userInfo)}
				/>
			</View>
			<View>
				<Overlay
					animationType='slide'
					overlayStyle={styles.login__modal}
					isVisible={loginMenuOverlay}
				>
					<KakaotalkLogin
						loginMenuHandler={loginMenuHandler}
						navigatingAdditionalUserInfo={navigatingAdditionalUserInfo}
					/>
					<Button title='이메일' type='outline' raised onPress={navigatingEmailLogin} />
					<Button title='닫기' type='outline' raised onPress={loginMenuHandler} />
				</Overlay>
			</View>
		</View>
	);
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

const styles = StyleSheet.create({
	userInfo: {
		flex: 9,
	},
});
