import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, Animated, Easing, StyleSheet } from 'react-native';
import { Overlay, CheckBox, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

function AdditionalUserInfo({
	registerInfo,
	registerHandler,
	navigation,
	completeGoogleLogin,
	setUser,
	user,
	deleteUserHandler,
}) {
	const [maleChecked, setMaleChecked] = useState(false);
	const [femaleChecked, setFemaleChecked] = useState(false);
	const [age, setAge] = useState();

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
	const maleGenderHandler = () => {
		if (!maleChecked) {
			setFemaleChecked(false);
			setMaleChecked(prevState => !prevState);
			// setUser({ ...user, gender: 'Male' });
			registerHandler({
				email: registerInfo.userEmail,
				name: registerInfo.userName,
				id: registerInfo.userPw,
				gender: 'Male',
				age: registerInfo.userAge,
			});
		} else {
			setMaleChecked(prevState => !prevState);
			// setUser({ ...user, gender: '' });
			registerHandler({
				email: registerInfo.userEmail,
				name: registerInfo.userName,
				id: registerInfo.userPw,
				gender: '',
				age: registerInfo.userAge,
			});
		}
	};

	const femaleGenderHandler = () => {
		if (!femaleChecked) {
			setMaleChecked(false);
			setFemaleChecked(prevState => !prevState);
			// setUser({ ...user, gender: 'Female' });
			registerHandler({
				email: registerInfo.userEmail,
				name: registerInfo.userName,
				id: registerInfo.userPw,
				gender: 'Female',
				age: registerInfo.userAge,
			});
		} else {
			setFemaleChecked(prevState => !prevState);
			// setUser({ ...user, gender: '' });
			registerHandler({
				email: registerInfo.userEmail,
				name: registerInfo.userName,
				id: registerInfo.userPw,
				gender: '',
				age: registerInfo.userAge,
			});
		}
	};

	const addUserHandler = () => {
		const { userEmail, userName, userPw, userAge, userGender } = registerInfo;
		axios
			.post('http://localhost:4001/auth/adduser', {
				email: userEmail,
				password: userPw,
				name: userName,
				gender: userGender,
				age: userAge,
			})
			.then(() => {
				navigation.navigate('About');
			})
			.catch(error => {
				console.log('MONGODB ERROR');
				console.error(error);
			});
	};

	// const ageHandler = () => {
	// 	setUser({ ...user, age: age });
	// };

	// useEffect(() => ageHandler(), [age]);

	return (
		// <Overlay animationType='slide' fullScreen={true} isVisible={modal}>
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
				<Text
					style={{
						fontSize: 20,
						height: 40,
						width: 300,
						marginLeft: 15,
						paddingTop: 10,
					}}
				>
					{registerInfo.userName}
				</Text>
				<LinearGradient
					colors={['#87B672', '#A8CA99', '#D4E4CD']}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					style={{ marginHorizontal: 10 }}
				>
					<Text style={styles.login__modal__input__text}>EMAIL</Text>
				</LinearGradient>
				<Text
					style={{
						fontSize: 20,
						height: 40,
						width: 300,
						marginLeft: 15,
						paddingTop: 6,
					}}
				>
					{registerInfo.userEmail}
				</Text>
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
					placeholder={{ label: '나이를 선택해 주세요.', value: null }}
					onValueChange={value =>
						registerHandler({
							email: registerInfo.userEmail,
							name: registerInfo.userName,
							id: registerInfo.userPw,
							gender: registerInfo.userGender,
							age: value,
						})
					}
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
					containerStyle={{ marginTop: 80 }}
					buttonStyle={{ width: 300, backgroundColor: '#A8CA99' }}
					titleStyle={{ color: 'white' }}
					title='REGISTER'
					type='solid'
					raised
					onPress={addUserHandler}
				/>
				{/* <Button
					containerStyle={{ marginVertical: 50 }}
					buttonStyle={{ width: 300, backgroundColor: '#D4E4CD' }}
					titleStyle={{ color: 'white' }}
					title='CLOSE'
					type='solid'
					raised
					onPress={() => deleteUserHandler(user)}
				/> */}
			</View>
			<View style={styles.register__modal__bottom} />
		</View>
		// </Overlay>
	);
}

const mapStateToProps = state => {
	return {
		registerInfo: state.registerInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		registerHandler: type => {
			dispatch({ type: actionTypes.REGISTER, payload: type });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalUserInfo);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'pink',
	},
	logo: {
		flex: 2,
		justifyContent: 'center',
		alignSelf: 'center',
		// backgroundColor: 'lightgreen',
	},

	login__modal__input__text: {
		marginLeft: 10,
		color: 'white',
	},
	register__modal__input: {
		flex: 4,
		justifyContent: 'space-around',
		// backgroundColor: 'lightblue',
	},
	register__modal__button: {
		flex: 3,
		alignSelf: 'center',
		// backgroundColor: 'pink',
	},
	register__modal__bottom: {
		flex: 1,
		// backgroundColor: 'pink',
	},
	resister__modal__input__gender: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
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
