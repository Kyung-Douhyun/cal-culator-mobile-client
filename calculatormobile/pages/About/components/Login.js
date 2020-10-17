import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import LoginTypes from './loginComponents/LoginTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import ModifyModal from './ModifyModal';

function Login({ userInfo }) {
	const { userId } = userInfo;
	const [curUser, setCurUser] = useState({
		id: '',
		name: '',
		email: '',
		gender: '',
		age: 0,
		height: 0,
		weight: 0,
	});
	const [bmiState, setBmiState] = useState('');
	const [isLogin, setIsLogin] = useState(false);

	const [visible1, setVisible1] = useState(false);
	const [visible2, setVisible2] = useState(false);
	const [visible3, setVisible3] = useState(false);

	const toggleOverlay1 = () => {
		setVisible1(!visible1);
	};
	const toggleOverlay2 = () => {
		setVisible2(!visible2);
	};
	const toggleOverlay3 = () => {
		setVisible3(!visible3);
	};

	const updateUser = ({ name, email, gender, age, height, weight }) => {
		axios
			.patch('http://localhost:4001/auth/updateUser', {
				userId,
				name: name,
				email: email,
				gender: gender,
				age: age,
				height: height,
				weight: weight,
			})
			.then(res => {
				if (res) {
					console.log('UPDATED USER INFO');
					setVisible1(false);
					setVisible2(false);
					setVisible3(false);
				}
			})
			.catch(err => {
				console.error(err);
			});
	};

	const loginedUser = () => {
		// console.log(userId);
		axios
			.post('http://localhost:4001/auth/loginedUser', {
				userId,
			})
			.then(res => {
				const { email, name, age, gender, height, weight } = res.data[0];
				setCurUser({ ...curUser, email, name, age, gender, height, weight });
			});
	};

	useFocusEffect(
		useCallback(() => {
			loginedUser();
		}, [curUser]),
	);
	useFocusEffect(
		useCallback(() => {
			bmiStateHandler();
		}, [bmiState]),
	);

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

	const BMI = Math.ceil((curUser.weight / (curUser.height * curUser.height)) * (100 * 100));
	const bmiStateHandler = () => {
		if (BMI < 18.5) {
			setBmiState('저체중');
		} else if (18.5 <= BMI <= 24.9) {
			setBmiState('정상');
		} else if (25 <= BMI <= 29.9) {
			setBmiState('과체중');
		} else if (30 < BMI) {
			setBmiState('비만');
		}
	};
	useEffect(() => bmiStateHandler(), []);
	useEffect(() => setIsLogin(userInfo.isLogin));
	useEffect(() => loginedUser(), [isLogin]);
	// useEffect(() => console.log(curUser));

	return (
		<View style={styles.container}>
			<View style={styles.configTitle}>
				<Animated.Image
					style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
					source={require('../../../asset/Image/logo_2000_2000.png')}
				/>
			</View>
			<ModifyModal
				visible1={visible1}
				visible2={visible2}
				visible3={visible3}
				toggleOverlay1={toggleOverlay1}
				toggleOverlay2={toggleOverlay2}
				toggleOverlay3={toggleOverlay3}
				updateUser={updateUser}
			/>
			<View style={styles.userInfo}>
				<ListItem bottomDivider>
					<Icon name='human' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>이름</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>{curUser.name}</ListItem.Subtitle>
					</ListItem.Content>
					<Icon onPress={toggleOverlay1} name='dots-vertical' type='material-community' size={28} />
				</ListItem>
				<ListItem bottomDivider>
					<Icon name='email' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>이메일</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>{curUser.email}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem bottomDivider>
					{curUser.gender === 'Male' ? (
						<Icon name='gender-male' type='material-community' size={28} />
					) : (
						<Icon name='gender-female' type='material-community' size={28} />
					)}
					<ListItem.Content>
						<ListItem.Title>성별</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>{curUser.gender}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem bottomDivider>
					<Icon name='numeric' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>나이</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>{curUser.age}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<View style={styles.userInfo__bmi__}>
					<View style={styles.userInfo__bmi__left}>
						<ListItem bottomDivider>
							<Icon name='human-male-height' type='material-community' size={28} />
							<ListItem.Content>
								<ListItem.Title>키</ListItem.Title>
								<ListItem.Subtitle style={{ alignSelf: 'center' }}>
									{curUser.height} cm
								</ListItem.Subtitle>
							</ListItem.Content>
							<Icon
								onPress={toggleOverlay2}
								name='dots-vertical'
								type='material-community'
								size={28}
							/>
						</ListItem>
						<ListItem bottomDivider>
							<Icon name='weight-kilogram' type='material-community' size={28} />
							<ListItem.Content>
								<ListItem.Title>몸무게</ListItem.Title>
								<ListItem.Subtitle style={{ alignSelf: 'center' }}>
									{curUser.weight} kg
								</ListItem.Subtitle>
							</ListItem.Content>
							<Icon
								onPress={toggleOverlay3}
								name='dots-vertical'
								type='material-community'
								size={28}
							/>
						</ListItem>
					</View>
					<View style={styles.userInfo__bmi__right}>
						<ListItem
							containerStyle={{
								height: 127,
								borderLeftWidth: 1,
								borderLeftColor: 'lightgrey',
							}}
							bottomDivider
						>
							<Icon name='calculator' type='material-community' size={28} />
							<ListItem.Content>
								<ListItem.Title>BMI</ListItem.Title>
								<ListItem.Subtitle>{BMI}</ListItem.Subtitle>
								<ListItem.Subtitle>{bmiState}</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					</View>
				</View>
			</View>
			<View style={styles.button}>
				<LoginTypes curUser={curUser} setCurUser={setCurUser} />
			</View>
		</View>
	);
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	configTitle: {
		flex: 2.5,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	userInfo: {
		flex: 5.5,
	},
	userInfo__bmi__: {
		flexDirection: 'row',
	},
	userInfo__bmi__left: {
		flex: 5,
	},
	userInfo__bmi__right: {
		flex: 5,
	},
	button: {
		flex: 2,
	},
});
