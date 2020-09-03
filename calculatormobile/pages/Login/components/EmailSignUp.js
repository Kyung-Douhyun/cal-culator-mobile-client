import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useMutation} from '@apollo/client';
import auth from '@react-native-firebase/auth';
import ADD_USER from '../../../graphQL/ADD_USER';

export default function EmailSignUp() {
  const [emailLogin, setEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState();
  const [addUser, {loading, error, data}] = useMutation(ADD_USER, {
    onCompleted({addUser: {id, name, email}}) {
      console.log({id, name, email});
    },
  });

  const firebaseEmailSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (created) => {
        if (created) {
          console.log(created);
          console.log('USER ACCOUNT CREATED & SIGNED IN!');
          await addUser({
            variables: {name, email, password, gender, age},
          })
            .then((aa) => {
              if (aa) {
                console.log('ADD_USER MUTATION SUCCESS');
                emailLoginHandler();
              }
            })
            .catch((error) => {
              console.log('MONGODB ERROR');
              console.error(error);
            });
        }
      })
      .catch((error) => {
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
    setEmailLogin((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <Text onPress={emailLoginHandler}>Email Login</Text>
      <Modal animationType="slide" transparent={false} visible={emailLogin}>
        <SafeAreaView>
          <View>
            <Text>Name</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => setName(text)}
            />
            <Text>Email</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => setEmail(text)}
            />
            <Text>Password</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => setPassWord(text)}
            />
            <Text>Gender</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => setGender(text)}
            />
            <Text>Age</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(value) => setAge(Number(value))}
            />
            <Text type="submit" onPress={firebaseEmailSignUp}>
              Login
            </Text>
            <Text onPress={emailLoginHandler}>Close</Text>
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
    backgroundColor: '#f3f3',
  },
});
