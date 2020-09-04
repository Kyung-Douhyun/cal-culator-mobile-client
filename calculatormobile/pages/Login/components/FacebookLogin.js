import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { View, Text, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import AddUserInfoModal from './AddUserInfoModal';
import ADD_USER from '../../../graphQL/ADD_USER';
import ADD_USER_INFO from '../../../graphQL/ADD_USER_INFO';

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

	const modalHandler = () => {
		setModal(prevState => !prevState);
	};
	return (
		<View style={styles.container}>
			<Text onPress={firebaseFacebookLogin}>Facebook Login</Text>
			<AddUserInfoModal
				modal={modal}
				user={user}
				setUser={setUser}
				completeGoogleLogin={completeFacebookLogin}
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
		backgroundColor: 'skyblue',
	},
});
