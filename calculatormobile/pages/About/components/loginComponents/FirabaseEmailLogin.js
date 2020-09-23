import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';
import { Input, Icon, Button, Overlay } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useMutation } from '@apollo/client';
import auth from '@react-native-firebase/auth';
import LOGIN from '../../../graphQL/LOGIN';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function FirebaseEmailLogin({
	refetch,
	loginModal,
	registerModalHandler,
	loginModalHandler,
	loginHandler,
}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login] = useMutation(LOGIN, {
		onCompleted({ login: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});

	const spinValue = useState(new Animated.Value(0))[0];
	Animated.loop(
		Animated.timing(spinValue, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
			useNativeDriver: true,
		}),
	).start();
	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	const firebaseEmailLogin = () => {
		auth()
			.signInWithEmailAndPassword(email, password)
			.then(async signedin => {
				if (signedin) {
					console.log('FIREBASE EMAIL LOGIN SUCCESS');
					await login({
						variables: { email, password },
					}).then(logined => {
						if (logined) {
							console.log('LOGIN MUTATION SUCCESS');

							loginHandler();
						}
					});
				}
			})
			.catch(error => {
				if (error.code === 'AUTH/INVALID EMAIL') {
					console.log('THAT EMAIL ADDRESS IS INVALID!');
				}
				console.error('error :', error);
			});
	};

	return (
		<Overlay
			overlayStyle={styles.login__modal}
			animationType='slide'
			transparent={false}
			fullScreen={true}
			isVisible={loginModal}
		>
			<View style={styles.container}>
				<View style={styles.logo}>
					<Animated.Image
						style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
						source={require('../../../asset/Image/logo_2000_2000.png')}
					/>
				</View>
				<View style={styles.login__modal__input}>
					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>EMAIL</Text>
					</LinearGradient>
					<Input
						autoCapitalize='none'
						inputContainerStyle={{}}
						placeholder='이메일을 입력해 주세요.'
						leftIcon={<Icon name='email' type='material-community' size={24} color='lightgrey' />}
						onChangeText={text => setEmail(text)}
					/>

					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>PASSWORD</Text>
					</LinearGradient>
					<Input
						placeholder='비밀번호를 입력해 주세요.'
						leftIcon={<Icon name='lock' type='material-community' size={24} color='lightgrey' />}
						onChangeText={text => setPassword(text)}
					/>
				</View>
				<View style={styles.login__modal__button}>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#87B672' }}
						titleStyle={{ color: 'white' }}
						title='LOGIN'
						type='solid'
						raised
						onPress={firebaseEmailLogin}
					/>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#A8CA99' }}
						titleStyle={{ color: 'white' }}
						title='REGISTER'
						type='solid'
						raised
						onPress={registerModalHandler}
					/>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#D4E4CD' }}
						titleStyle={{ color: 'white' }}
						title='CLOSE'
						type='solid'
						raised
						onPress={loginModalHandler}
					/>
				</View>
				<View style={styles.login__modal__footer}>
					<Text style={styles.login__modal__footer__text}>CAL-CULATOR_2020</Text>
				</View>
			</View>
		</Overlay>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		loginHandler: () => {
			dispatch({ type: actionTypes.LOGIN });
		},
	};
};

export default connect(null, mapDispatchToProps)(FirebaseEmailLogin);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		flex: 0.2,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	login__modal__input: {
		flex: 0.4,
		justifyContent: 'center',
	},
	login__modal__input__text: {
		marginLeft: 10,
		color: 'white',
	},
	login__modal__button: {
		flex: 0.25,
		justifyContent: 'space-around',
		alignSelf: 'center',
	},
	login__modal__footer: {
		flex: 0.15,
		justifyContent: 'flex-end',
		alignSelf: 'center',
	},
	login__modal__footer__text: {
		color: '#87B672',
	},
});
