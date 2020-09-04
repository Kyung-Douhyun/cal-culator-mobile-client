/* eslint-disable no-catch-shadow */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView, TextInput } from 'react-native';
import { useMutation } from '@apollo/client';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';

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

	const completeGoogleLogin = async () => {
		console.log(user);
		await addUserInfoHandler(user);
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

	const modalHandler = () => {
		setModal(prevState => !prevState);
	};
	return (
		<View style={styles.container}>
			<Text onPress={firebaseGoogleLogin}>Google Login</Text>
			<AddUserInfoModal
				modal={modal}
				user={user}
				setUser={setUser}
				completeGoogleLogin={completeGoogleLogin}
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
		backgroundColor: '#ddd',
	},
});
