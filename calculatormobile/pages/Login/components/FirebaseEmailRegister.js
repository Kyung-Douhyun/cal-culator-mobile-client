import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';
import { Input, Icon, Button, Overlay, CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import { useMutation } from '@apollo/client';
import auth from '@react-native-firebase/auth';
import ADD_USER from '../../../graphQL/ADD_USER';

export default function FirebaseEmail({ registerModal, registerModalHandler }) {
	const [email, setEmail] = useState('');
	const [password, setPassWord] = useState('');
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [maleChecked, setMaleChecked] = useState(false);
	const [femaleChecked, setFemaleChecked] = useState(false);
	const [addUser] = useMutation(ADD_USER, {
		onCompleted({ addUser: { id, name, email } }) {
			console.log({ id, name, email });
		},
	});
	const spinValue = useState(new Animated.Value(0))[0];
	Animated.loop(
		Animated.timing(spinValue, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
			useNativeDriver: true,
		}),
	).start();
	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
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
								registerModalHandler();
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

	const maleGenderHandler = () => {
		if (!maleChecked) {
			setFemaleChecked(false);
			setMaleChecked(prevState => !prevState);
			setGender('Male');
		} else {
			setMaleChecked(prevState => !prevState);
			setGender('');
		}
	};

	const femaleGenderHandler = () => {
		if (!femaleChecked) {
			setMaleChecked(false);
			setFemaleChecked(prevState => !prevState);
			setGender('Female');
		} else {
			setFemaleChecked(prevState => !prevState);
			setGender('');
		}
	};
	return (
		<Overlay animationType='slide' fullScreen={true} transparent={false} isVisible={registerModal}>
			<SafeAreaView style={styles.safeAreaView}>
				<View style={styles.logo}>
					<Animated.Image
						style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
						source={require('../../../asset/Image/logo_2000_2000.png')}
					/>
				</View>
				<View style={styles.register__modal__input}>
					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>NAME</Text>
					</LinearGradient>
					<Input
						inputContainerStyle={{}}
						placeholder='이름을 입력해 주세요.'
						leftIcon={<Icon name='email' type='material-community' size={24} color='lightgrey' />}
						onChangeText={text => setName(text)}
					/>
					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>EMAIL</Text>
					</LinearGradient>
					<Input
						inputContainerStyle={{}}
						placeholder='이메일을 입력해 주세요.'
						leftIcon={<Icon name='email' type='material-community' size={24} color='lightgrey' />}
						onChangeText={text => setEmail(text)}
					/>
					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>PASSWORD</Text>
					</LinearGradient>
					<Input
						inputContainerStyle={{}}
						placeholder='비밀번호를 입력해 주세요.'
						leftIcon={<Icon name='email' type='material-community' size={24} color='lightgrey' />}
						onChangeText={text => setPassWord(text)}
					/>
					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>GENDER</Text>
					</LinearGradient>
					<View style={styles.resister__modal__input__gender}>
						<CheckBox
							center
							containerStyle={{ flex: 1 }}
							iconType='antdesign'
							title='남자'
							size={20}
							checkedIcon='checksquare'
							uncheckedIcon='checksquareo'
							checked={maleChecked}
							onIconPress={maleGenderHandler}
						/>
						<CheckBox
							center
							containerStyle={{ flex: 1 }}
							iconType='antdesign'
							title='여자'
							size={20}
							checkedIcon='checksquare'
							uncheckedIcon='checksquareo'
							checked={femaleChecked}
							onIconPress={femaleGenderHandler}
						/>
					</View>

					<LinearGradient
						colors={['#87B672', '#A8CA99', '#D4E4CD']}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						style={{ marginHorizontal: 10 }}
					>
						<Text style={styles.login__modal__input__text}>AGE</Text>
					</LinearGradient>
					<RNPickerSelect
						placeholder={{ label: '13123123131', value: null }}
						onValueChange={value => console.log(value)}
						items={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' },
						]}
					/>
				</View>
				<View style={styles.register__modal__button}>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#A8CA99' }}
						titleStyle={{ color: 'white' }}
						title='REGISTER'
						type='solid'
						raised
						onPress={firebaseEmailRegister}
					/>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#D4E4CD' }}
						titleStyle={{ color: 'white' }}
						title='CLOSE'
						type='solid'
						raised
						onPress={registerModalHandler}
					/>
				</View>
			</SafeAreaView>
		</Overlay>
	);
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	logo: {
		flex: 0.2,
		justifyContent: 'center',
		alignSelf: 'center',
	},

	login__modal__input__text: {
		marginLeft: 10,
		color: 'white',
	},
	register__modal__input: {
		flex: 0.65,
	},
	register__modal__button: {
		flex: 0.15,
		justifyContent: 'space-around',
		alignSelf: 'center',
	},
	resister__modal__input__gender: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
