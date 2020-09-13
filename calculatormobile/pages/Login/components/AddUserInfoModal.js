import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Animated, Easing, StyleSheet } from 'react-native';
import { Overlay, CheckBox, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default function GoogleLogin({
	modal,
	completeGoogleLogin,
	setUser,
	user,
	deleteUserHandler,
}) {
	const [maleChecked, setMaleChecked] = useState(false);
	const [femaleChecked, setFemaleChecked] = useState(false);

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
	const maleGenderHandler = () => {
		if (!maleChecked) {
			setFemaleChecked(false);
			setMaleChecked(prevState => !prevState);
			setUser({ ...user, gender: 'Male' });
		} else {
			setMaleChecked(prevState => !prevState);
			setUser({ ...user, gender: '' });
		}
	};

	const femaleGenderHandler = () => {
		if (!femaleChecked) {
			setMaleChecked(false);
			setFemaleChecked(prevState => !prevState);
			setUser({ ...user, gender: 'Female' });
		} else {
			setFemaleChecked(prevState => !prevState);
			setUser({ ...user, gender: '' });
		}
	};

	return (
		<Overlay animationType='slide' fullScreen={true} isVisible={modal}>
			<SafeAreaView style={styles.container}>
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
					<Text
						style={{
							fontSize: 20,
							height: 40,
							width: 300,
							marginLeft: 15,
							paddingTop: 10,
						}}
					>
						{user.name}
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
						{user.email}
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
					<TextInput
						style={{ marginHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={value => setUser({ ...user, age: Number(value) })}
					/>
				</View>
				<View style={styles.register__modal__button}>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#A8CA99' }}
						titleStyle={{ color: 'white' }}
						title='REGISTER'
						type='solid'
						raised
						onPress={completeGoogleLogin}
					/>
					<Button
						buttonStyle={{ width: 300, backgroundColor: '#D4E4CD' }}
						titleStyle={{ color: 'white' }}
						title='CLOSE'
						type='solid'
						raised
						onPress={() => deleteUserHandler(user)}
					/>
				</View>
				<View style={styles.register__modal__bottom} />
			</SafeAreaView>
		</Overlay>
	);
}

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
		flex: 2,
		justifyContent: 'space-around',
		alignSelf: 'center',
		// backgroundColor: 'pink',
	},
	register__modal__bottom: {
		flex: 2,
	},
	resister__modal__input__gender: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
