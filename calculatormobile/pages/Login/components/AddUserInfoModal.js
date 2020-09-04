import React from 'react';
import { View, Text, Modal, SafeAreaView, TextInput } from 'react-native';

export default function GoogleLogin({ modal, completeGoogleLogin, modalHandler, setUser, user }) {
	return (
		<Modal animationType='slide' transparent={false} visible={modal}>
			<SafeAreaView>
				<View>
					<Text>Name</Text>
					<Text style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}>{user.name}</Text>

					<Text>Email</Text>
					<Text style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}>{user.email}</Text>

					<Text>Gender</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => setUser({ ...user, gender: text })}
					/>
					<Text>Age</Text>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={value => setUser({ ...user, age: Number(value) })}
					/>
					<Text type='submit' onPress={completeGoogleLogin}>
						Login
					</Text>
					<Text onPress={modalHandler}>Close</Text>
				</View>
			</SafeAreaView>
		</Modal>
	);
}
