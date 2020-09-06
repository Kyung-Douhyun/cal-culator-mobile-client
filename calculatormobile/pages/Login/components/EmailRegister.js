import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal } from 'react-native';
import { useMutation } from '@apollo/client';
import auth from '@react-native-firebase/auth';
import ADD_USER from '../../../graphQL/ADD_USER';

export default function EmailRegister() {
	const [registerModal, setRegisterModal] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassWord] = useState('');
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [addUser] = useMutation(ADD_USER, {
		onCompleted({ addUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});

	const firebaseEmailRegister = () => {
		auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async created => {
				if (created) {
					console.log(created);
					console.log('USER ACCOUNT CREATED & SIGNED IN!');
					await addUser({
						variables: { name, email, password, gender, age },
					})
						.then(aa => {
							if (aa) {
								console.log('ADD_USER MUTATION SUCCESS');
								emailLoginHandler();
							}
						})
						.catch(error => {
							console.log('MONGODB ERROR');
							console.error(error);
						});
				}
			})
			.catch(error => {
				if (error.code === 'AUTH/EMAIL-ALREADY-IN-USE') {
					console.log('THAT EMAIL ADDRESS IS ALREADY IN USE!');
				}

				if (error.code === 'AUTH/INVALID-EMAIL') {
					console.log('THAT EMAIL ADDRESS IS INVALID!');
				}

				console.error(error);
			});
	};
	const emailLoginHandler = () => {
		setRegisterModal(prevState => !prevState);
	};

	return (
		<View style={styles.container}>
			<Modal animationType='slide' transparent={false} visible={registerModal}>
				<View>
					<Text>Name</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setName(text)}
					/>
					<Text>Email</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setEmail(text)}
					/>
					<Text>Password</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setPassWord(text)}
					/>
					<Text>Gender</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setGender(text)}
					/>
					<Text>Age</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={value => setAge(Number(value))}
					/>
					<Text type='submit' onPress={firebaseEmailRegister}>
						Login
					</Text>
					<Text onPress={emailLoginHandler}>Close</Text>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f3f3',
	},
});
