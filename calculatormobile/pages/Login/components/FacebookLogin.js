import React from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { View, Text, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import ADD_USER from '../../../graphQL/ADD_USER';

export default function FacebookLogin() {
  const [addUser, { loading, error, data }] = useMutation(ADD_USER, {
    onCompleted({ addUser: { id, name, email } }) {
      console.log({ id, name, email });
    },
  });
  const firebaseFacebookLogin = async () => {
    await LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(new Error(' '));
        }
        console.log('FIREBASE FACEBOOK LOGIN SUCCESS');
        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        const credential = auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        return auth().signInWithCredential(credential);
      })
      .then((currentUser) => {
        // console.log(currentUser);
        addUserHandler(currentUser.user);
      })
      .catch((error) => {
        console.log(`FIREBASE FACEBOOK LOGIN FAIL: ${error}`);
      });
  };

  const addUserHandler = async ({ displayName, email, uid }) => {
    await addUser({
      variables: { name: displayName, email, password: uid },
    });
  };
  return (
    <View style={styles.container}>
      <Text onPress={firebaseFacebookLogin}>Facebook Login</Text>
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
