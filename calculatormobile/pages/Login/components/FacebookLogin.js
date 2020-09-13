import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useMutation } from '@apollo/client';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';
import DELETE_USER from '../../../graphQL/DELETE_USER';

export default function FacebookLogin() {
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

	const [deleteUser] = useMutation(DELETE_USER, {
		onCompleted({ deleteUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});

	const completeFacebookLogin = async () => {
		console.log(user);
		await addUserInfoHandler(user);
	};
	const firebaseFacebookLogin = async () => {
		await LoginManager.logInWithPermissions(['public_profile', 'email'])
			.then(result => {
				if (result.isCancelled) {
					return Promise.reject(new Error(' '));
				}
				console.log('FIREBASE FACEBOOK LOGIN SUCCESS');
				return AccessToken.getCurrentAccessToken();
			})
			.then(data => {
				const credential = auth.FacebookAuthProvider.credential(data.accessToken);
				return auth().signInWithCredential(credential);
			})
			.then(currentUser => {
				// console.log(currentUser);
				addUserHandler(currentUser.user);
				modalHandler();
			})
			.catch(error => {
				console.log(`FIREBASE FACEBOOK LOGIN FAIL: ${error}`);
			});
	};

	const addUserHandler = async ({ displayName, email, uid }) => {
		await addUser({
			variables: { name: displayName, email, password: uid },
		});
	};

	const addUserInfoHandler = async ({ email, gender, age }) => {
		console.log({ email, gender, age });
		await addUserInfo({
			variables: { email, gender, age },
		});
	};

	const deleteUserHandler = async ({ email }) => {
		await deleteUser({
			variables: { email },
		});
		modalHandler();
	};

	const modalHandler = () => {
		setModal(prevState => !prevState);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.facebook__login} onPress={firebaseFacebookLogin}>
				<Icon
					containerStyle={styles.facebook__login__icon}
					name='facebook'
					size={30}
					iconStyle={{ color: '#FFFFFF' }}
					type='material-community'
				/>
				<Text style={styles.facebook__login__text}>Login With Facebook</Text>
			</TouchableOpacity>
			<View>
				<AddUserInfoModal
					modal={modal}
					user={user}
					setUser={setUser}
					completeGoogleLogin={completeFacebookLogin}
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
	facebook__login: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 300,
		backgroundColor: '#3b5998',
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
	facebook__login__icon: {
		marginRight: 20,
		top: 14,
	},
	facebook__login__text: {
		fontWeight: '700',
		top: 20,
		color: '#FFFFFF',
	},
});
