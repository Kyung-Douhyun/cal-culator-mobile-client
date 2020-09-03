import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useMutation} from '@apollo/client';
import auth from '@react-native-firebase/auth';
import LOGIN from '../../../graphQL/LOGIN';

export default function EmailSignUp() {
  const [emailLogin, setEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [login, {loading, error, data}] = useMutation(LOGIN, {
    onCompleted({login: {id, name, email}}) {
      console.log({id, name, email});
    },
  });

  const firebaseEmailLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (signedin) => {
        if (signedin) {
          console.log('FIREBASE EMAIL LOGIN SUCCESS');
          await login({
            variables: {email, password},
          }).then((aa) => {
            if (aa) {
              console.log('LOGIN MUTATION SUCCESS');
            }
          });
        }
      })
      .catch((error) => {
        if (error.code === 'AUTH/INVALID EMAIL') {
          console.log('THAT EMAIL ADDRESS IS INVALID!');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 400,
          }}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => setPassWord(text)}
        />
        <Text type="submit" onPress={firebaseEmailLogin}>
          Login
        </Text>
      </View>
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
