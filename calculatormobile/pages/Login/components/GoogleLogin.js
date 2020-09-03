/* eslint-disable no-catch-shadow */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Modal, SafeAreaView, Alert} from 'react-native';
import {useMutation} from '@apollo/client';
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import ADD_USER from '../../../graphQL/ADD_USER';

GoogleSignin.configure({
  webClientId:
    '129551562719-pnfn8u9ibnd9rot5fmi6je1lgddv6b6u.apps.googleusercontent.com',
});

export default function GoogleLogin() {
  const [modal, setModal] = useState(false);
  const [addUser, {loading, error, data}] = useMutation(ADD_USER, {
    onCompleted({addUser: {id, name, email}}) {
      console.log({id, name, email});
    },
  });

  const firebaseGoogleLogin = async () => {
    const {idToken, user} = await GoogleSignin.signIn();
    addUserHandler(user);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const addUserHandler = async ({name, email, id}) => {
    await addUser({
      variables: {name, email, password: id},
    });
  };

  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <Text onPress={firebaseGoogleLogin}>Google Login</Text>
      <Modal animationType="slide" transparent={false} visible={modal}>
        <SafeAreaView>
          <View>
            <Text onPress={modalHandler}>Close</Text>
          </View>
        </SafeAreaView>
      </Modal>
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
