/* eslint-disable no-catch-shadow */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useMutation } from '@apollo/client';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';
import LOGIN from '../../../graphQL/LOGIN';
import DELETE_USER from '../../../graphQL/DELETE_USER';

GoogleSignin.configure({
	webClientId: '129551562719-pnfn8u9ibnd9rot5fmi6je1lgddv6b6u.apps.googleusercontent.com',
});

export default function GoogleLogin() {
	const [modal, setModal] = useState(false);
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		gender: '',
		age: null,
	});
	const [addUser, { loading, error }] = useMutation(ADD_USER, {
		onCompleted({ addUser: { id, name, email } }) {
			console.log({ id, name, email });
			console.log(addUser);
			setUser({ id, email, name });
			console.log('user :', user);
		},
	});
	const [addUserInfo] = useMutation(ADD_USER_INFO, {
		onCompleted({ addUserInfo: { id, name, email, gender, age } }) {
			console.log({ id, name, email, gender, age });
		},
	});

	const [deleteUser] = useMutation(DELETE_USER, {
		onCompleted({ deleteUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});

	const [login] = useMutation(LOGIN, {
		onCompleted({ login: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});

	const completeGoogleLogin = async () => {
		console.log(user);
		await addUserInfoHandler(user);
		modalHandler();
	};

	const firebaseGoogleLogin = async () => {
		await GoogleSignin.hasPlayServices();
		const { idToken, user } = await GoogleSignin.signIn();
		await addUserHandler(user);
		modalHandler();
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		return auth().signInWithCredential(googleCredential);
	};

	const addUserHandler = async ({ name, email, id }) => {
		await addUser({
			variables: { name, email, password: id },
		});
	};
	const addUserInfoHandler = async ({ email, gender, age }) => {
		console.log({ email, gender, age });
		await addUserInfo({
			variables: { email, gender, age },
		});
	};

	const deleteUserHandler = async ({ email }) => {
		modalHandler();
		await deleteUser({
			variables: { email },
		});
	};

	const modalHandler = () => {
		setModal(prevState => !prevState);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.google__login} onPress={firebaseGoogleLogin}>
				<Icon
					containerStyle={styles.google__login__icon}
					name='google'
					size={30}
					iconStyle={{ color: '#FFFFFF' }}
					type='material-community'
				/>
				<Text style={styles.google__login__text}>Login With Google</Text>
			</TouchableOpacity>
			<View>
				<AddUserInfoModal
					modal={modal}
					user={user}
					setUser={setUser}
					completeGoogleLogin={completeGoogleLogin}
					modalHandler={modalHandler}
					deleteUserHandler={deleteUserHandler}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	google__login: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#D50F25',
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
	google__login__icon: {
		marginRight: 20,
		top: 14,
	},
	google__login__text: {
		fontWeight: '700',
		top: 20,
		color: '#FFFFFF',
	},
});
