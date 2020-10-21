import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Alert } from 'react-native';
import { Input, Icon, Button, Overlay, CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

export default function EmailRegister({ registerModal, registerModalHandler }) {
	const [email, setEmail] = useState('');
	const [password, setPassWord] = useState('');
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState();
	const [maleChecked, setMaleChecked] = useState(false);
	const [femaleChecked, setFemaleChecked] = useState(false);

	// const [addUser] = useMutation(ADD_USER, {
	// 	onCompleted({ addUser: { id, name, email } }) {
	// 		console.log({ id, name, email });
	// 	},
	// });
	// useEffect(() => console.log(age), [age]);

	// const spinValue = useState(new Animated.Value(0))[0];
	// Animated.loop(
	// 	Animated.timing(spinValue, {
	// 		toValue: 1,
	// 		duration: 3000,
	// 		easing: Easing.linear,
	// 		useNativeDriver: true,
	// 	}),
	// ).start();
	// const spin = spinValue.interpolate({
	// 	inputRange: [0, 1],
	// 	outputRange: ['0deg', '360deg'],
	// });

	// const EmailRegister = () => {
	// 	auth()
	// 		.createUserWithEmailAndPassword(email, password)
	// 		.then(async created => {
	// 			if (created) {
	// 				console.log('USER ACCOUNT CREATED & SIGNED IN!');
	// 				axios
	// 					.post('http://localhost:4001/auth/adduser', { email, password, name, gender, age })
	// 					.then(() => {
	// 						registerModalHandler();
	// 					})
	// 					.catch(error => {
	// 						console.log('MONGODB ERROR');
	// 						console.error(error);
	// 					});
	// 			}
	// 		})
	// 		.catch(() => {
	// 			Alert.alert('경고', '이미 존재하는 이메일입니다.', [{ text: 'OK' }], { cancelable: false });
	// 		});
	// };

	const addUserHandler = () => {
		axios
			.post('http://localhost:4001/auth/adduser', { email, password, name, gender, age })
			.then(() => {
				registerModalHandler();
			})
			.catch(error => {
				console.log('MONGODB ERROR');
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
		// <Overlay animationType='slide' fullScreen={true} transparent={false} isVisible={registerModal}>
		<View style={styles.container}>
			{/* <View style={styles.logo}>
				<Animated.Image
					style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
					source={require('../../../asset/Image/logo_2000_2000.png')}
				/>
			</View> */}
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
						containerStyle={{ flex: 1, height: 50, justifyContent: 'center' }}
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
						containerStyle={{ flex: 1, height: 50, justifyContent: 'center' }}
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
					placeholder={{ label: '나이를 선택해 주세요.', value: null }}
					onValueChange={value => setAge(value)}
					items={[
						{ label: '10~19', value: '10대' },
						{ label: '20~29', value: '20대' },
						{ label: '30~39', value: '30대' },
						{ label: '40~49', value: '40대' },
						{ label: '50~59', value: '50대' },
						{ label: '60~69', value: '60대' },
						{ label: '70~79', value: '70대' },
						{ label: '80~89', value: '80대' },
						{ label: '90~99', value: '90대' },
					]}
					style={{
						...pickerSelectStyles,
						iconContainer: {
							top: 10,
							right: 12,
						},
					}}
				/>
			</View>
			<View style={styles.register__modal__button}>
				<Button
					containerStyle={{ marginBottom: 20, marginTop: 50 }}
					buttonStyle={{ width: 300, backgroundColor: '#A8CA99' }}
					titleStyle={{ color: 'white' }}
					title='REGISTER'
					type='solid'
					raised
					onPress={addUserHandler}
				/>
				{/* <Button
					containerStyle={{ marginVertical: 20 }}
					buttonStyle={{ width: 300, backgroundColor: '#D4E4CD' }}
					titleStyle={{ color: 'white' }}
					title='CLOSE'
					type='solid'
					raised
					onPress={registerModalHandler}
				/> */}
			</View>
		</View>
		// </Overlay>
	);
}

const styles = StyleSheet.create({
	container: {
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
		flex: 0.5,
	},
	register__modal__button: {
		flex: 0.3,
		alignSelf: 'center',
	},
	resister__modal__input__gender: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginTop: 5,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30,
	},
});
