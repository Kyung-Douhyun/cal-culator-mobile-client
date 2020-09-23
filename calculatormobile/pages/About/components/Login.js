import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import LoginTypes from './loginComponents/LoginTypes';
import LOGINED_USER from '../../graphQL/LOGINED_USER';
import { useQuery } from '@apollo/client';

function Login() {
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
	const { loading, error, data, refetch } = useQuery(LOGINED_USER, {
		onCompleted: logined => {
			console.log('onCompleted :', logined);
			if (logined.loginedUser) {
				const { id, name, email, gender, age, height, weight } = logined.loginedUser;
				setCurUser({
					...curUser,
					id,
					name,
					email,
					gender,
					age,
					height,
					weight,
				});
			}
		},
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

	return (
		<View style={styles.container}>
			<View style={styles.configTitle}>
				<Text>calculator</Text>
			</View>
			<View style={styles.userInfo}>
				<ListItem bottomDivider>
					<Icon name='human' type='material-community' size={28} />
					<ListItem.Content>
						<ListItem.Title>이름</ListItem.Title>
						<ListItem.Subtitle style={{ alignSelf: 'center' }}>{curUser.name}</ListItem.Subtitle>
					</ListItem.Content>
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
						</ListItem>
						<ListItem bottomDivider>
							<Icon name='weight-kilogram' type='material-community' size={28} />
							<ListItem.Content>
								<ListItem.Title>몸무게</ListItem.Title>
								<ListItem.Subtitle style={{ alignSelf: 'center' }}>
									{curUser.weight} kg
								</ListItem.Subtitle>
							</ListItem.Content>
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
				<LoginTypes userId={curUser.id} refetch={refetch} />
			</View>
		</View>
	);
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	configTitle: {
		flex: 2.5,
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
