import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import ModifyModal from './ModifyModal';

function UserInfo({ userInfo }) {
	const { userId } = userInfo;
	// const [curUser, setCurUser] = useState({
	// 	id: '',
	// 	name: '',
	// 	email: '',
	// 	gender: '',
	// 	age: 0,
	// 	height: 0,
	// 	weight: 0,
	// });
	const [bmiState, setBmiState] = useState('');
	const [bmi, setBmi] = useState('');
	const [updated, setUpdated] = useState(false);
	// const [isLogin, setIsLogin] = useState(false);

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

	const updateUser = async ({ name, height, weight }) => {
		await axios
			.post('http://localhost:4001/auth/updateUser', {
				userId,
				name: name,
				height: height,
				weight: weight,
			})
			.then(res => {
				if (res.status === 201) {
					console.log('UPDATED USER INFO');
					setUpdated(!updated);
					setVisible1(false);
					setVisible2(false);
					setVisible3(false);
				}
			})
			.catch(err => {
				console.error(err);
			});
	};

	const bmiHandler = () => {
		setBmi(
			Math.ceil((userInfo.userWeight / (userInfo.userHeight * userInfo.userHeight)) * (100 * 100)),
		);
	};
	// const BMI = Math.ceil(
	// 	(userInfo.userWeight / (userInfo.userHeight * userInfo.userHeight)) * (100 * 100),
	// );
	const bmiStateHandler = () => {
		// console.log(bmi);
		if (bmi < 18.5) {
			setBmiState('저체중');
		} else if (18.5 <= bmi <= 24.9) {
			setBmiState('정상');
		} else if (25 <= bmi <= 29.9) {
			setBmiState('과체중');
		} else if (30 < bmi) {
			setBmiState('비만');
		}
	};
	useEffect(() => setBmi(bmiHandler), [updated]);
	useEffect(useCallback(() => bmiStateHandler(), [updated]));
	// useEffect(() => setIsLogin(userInfo.isLogin));

	return (
		<View style={styles.container}>
			{/* <View style={styles.configTitle}>
				<Animated.Image
					style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
					source={require('../../../asset/Image/logo_2000_2000.png')}
				/>
			</View> */}
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
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>
							{userInfo.userName}
						</ListItem.Subtitle>
					</ListItem.Content>
					<Icon onPress={toggleOverlay1} name='dots-vertical' type='material-community' size={28} />
				</ListItem>
				<ListItem bottomDivider>
					<Icon name='email' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>이메일</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>
							{userInfo.userEmail}
						</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem bottomDivider>
					{userInfo.userGender === 'Male' ? (
						<Icon name='gender-male' type='material-community' size={28} />
					) : (
						<Icon name='gender-female' type='material-community' size={28} />
					)}
					<ListItem.Content>
						<ListItem.Title>성별</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>
							{userInfo.userGender}
						</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem bottomDivider>
					<Icon name='numeric' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>나이</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>
							{userInfo.userAge}
						</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<View style={styles.userInfo__bmi__}>
					<View style={styles.userInfo__bmi__left}>
						<ListItem bottomDivider>
							<Icon name='human-male-height' type='material-community' size={28} />
							<ListItem.Content>
								<ListItem.Title>키</ListItem.Title>
								<ListItem.Subtitle style={{ alignSelf: 'center' }}>
									{userInfo.userHeight} cm
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
									{userInfo.userWeight} kg
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
								<ListItem.Subtitle>{bmi}</ListItem.Subtitle>
								<ListItem.Subtitle>{bmiState}</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					</View>
				</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

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
