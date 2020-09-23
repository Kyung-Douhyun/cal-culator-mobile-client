import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';

import LoginTypes from './components/LoginTypes';
import LOGINED_USER from '../../graphQL/LOGINED_USER';
import GET_USERS from '../../graphQL/GET_USERS';
import { useLazyQuery, useQuery } from '@apollo/client';

export default function Login() {
	const [curUser, setCurUser] = useState([]);
	const [bmiState, setBmiState] = useState('');

	const { loading, error, data } = useQuery(
		LOGINED_USER,
		{
			onCompleted: logined => {
				console.log('onCompleted :', logined);
			},
		},
		{ fetchPolicy: 'network-only' },
		{ notifyOnNetworkStatusChange: true },
	);

	const tempUser = [
		{
			name: 'KIM',
			email: 'test@test.net',
			gender: 'Male',
			age: 50,
			height: 170,
			weight: 60,
		},
	];
	const { name, email, gender, age, height, weight } = tempUser[0];
	const BMI = Math.ceil((weight / (height * height)) * (100 * 100));
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
			<View style={styles.user__}>
				<View style={styles.user__00__}>
					<Text>upper</Text>
				</View>
				<View style={styles.user__01__name__}>
					<View style={styles.user__01__name__01__}>
						<Text style={styles.user__01__name__01__text}>이름</Text>
					</View>
					<View style={styles.user__01__name__02__}>
						<Text style={styles.user__01__name__02__text}>{name}</Text>
					</View>
				</View>
				<View style={styles.user__02__email__}>
					<View style={styles.user__02__email__01__}>
						<Text style={styles.user__02__email__01__text}>이메일</Text>
					</View>
					<View style={styles.user__02__email__02__}>
						<Text style={styles.user__02__email__02__text}>{email}</Text>
					</View>
				</View>
				<View style={styles.user__03__}>
					<View style={styles.user__03__01__gender__}>
						<View style={styles.user__03__01__gender__01__}>
							<Text style={styles.user__03__01__gender__01__text}>성별</Text>
						</View>
						<View style={styles.user__03__01__gender__02__}>
							<Text style={styles.user__03__01__gender__02__text}>{gender}</Text>
						</View>
					</View>
					<View style={styles.user__03__02__age__}>
						<View style={styles.user__03__02__age__01__}>
							<Text style={styles.user__03__02__age__01__text}>나이</Text>
						</View>
						<View style={styles.user__03__02__age__02__}>
							<Text style={styles.user__03__02__age__02__text}>{age}</Text>
						</View>
					</View>
				</View>
				<View style={styles.user__04__}>
					<View style={styles.user__04__01__}>
						<View style={styles.user__04__01__01__height__}>
							<View style={styles.user__04__01__01__height__01__}>
								<Text style={styles.user__04__01__01__height__01__text}>신장</Text>
							</View>
							<View style={styles.user__04__01__01__height__02__}>
								<Text style={styles.user__04__01__01__height__02__text}>{height} cm</Text>
							</View>
						</View>
						<View style={styles.user__04__01__02__weight__}>
							<View style={styles.user__04__01__01__weight__01__}>
								<Text style={styles.user__04__01__01__weight__01__text}>체중</Text>
							</View>
							<View style={styles.user__04__01__01__weight__02__}>
								<Text style={styles.user__04__01__01__weight__02__text}>{weight} kg</Text>
							</View>
						</View>
					</View>
					<View style={styles.user__04__02__bmi__}>
						<View style={styles.user__04__02__bmi__01__title__}>
							<Text style={styles.user__04__02__bmi__01__title__text}>BMI</Text>
						</View>
						<View style={styles.user__04__02__bmi__02__value__}>
							<Tooltip popover={<Text>text tooltip</Text>} overlayColor='rgba(0,0,0,0)'>
								<Text style={styles.user__04__02__bmi__02__value__text}>{BMI}</Text>
							</Tooltip>
						</View>
						<View style={styles.user__04__02__bmi__03__state__}>
							<Text style={styles.user__04__02__bmi__03__state__text}>{bmiState}</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.login__logout}>
				<LoginTypes />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	user__: {
		flex: 8,
		backgroundColor: 'lightgreen',
	},
	user__00__: {
		flex: 2.5,
	},
	user__01__name__: {
		flex: 2,
	},
	user__01__name__01__: {
		flex: 3,
		justifyContent: 'center',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	user__01__name__01__text: {
		textAlign: 'center',
		fontSize: 18,
	},
	user__01__name__02__: {
		flex: 7,
		justifyContent: 'center',
	},
	user__01__name__02__text: {
		textAlign: 'center',
		fontSize: 24,
	},
	user__02__email__: {
		flex: 2,
	},
	user__02__email__01__: {
		flex: 3,
		justifyContent: 'center',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	user__02__email__01__text: {
		textAlign: 'center',
		fontSize: 18,
	},
	user__02__email__02__: {
		flex: 7,
		justifyContent: 'center',
	},
	user__02__email__02__text: {
		textAlign: 'center',
		fontSize: 24,
	},
	user__03__: {
		flex: 1,
		flexDirection: 'row',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	user__03__01__gender__: {
		flex: 5,
	},
	user__03__02__age__: {
		flex: 5,
	},
	user__03__01__gender__01__: {
		flex: 3,
		justifyContent: 'center',
		borderRightWidth: 1,
	},
	user__03__01__gender__01__text: {},
	user__03__01__gender__02__: {
		flex: 7,
		justifyContent: 'center',
		borderTopWidth: 1,
		borderRightWidth: 1,
	},
	user__03__01__gender__02__text: {
		fontSize: 24,
		textAlign: 'center',
	},
	user__03__02__age__01__: {
		flex: 3,
		justifyContent: 'center',
	},
	user__03__02__age__01__text: {},
	user__03__02__age__02__: {
		flex: 7,
		justifyContent: 'center',
		borderTopWidth: 1,
	},
	user__03__02__age__02__text: {
		fontSize: 24,
		textAlign: 'center',
	},
	user__04__: {
		flex: 2.5,
		flexDirection: 'row',
	},
	user__04__01__: {
		flex: 5,
	},
	user__04__01__01__height__: {
		flex: 5,
		justifyContent: 'center',
	},
	user__04__01__01__height__01__: {
		flex: 3,
		justifyContent: 'center',
	},
	user__04__01__01__height__01__text: {
		fontSize: 18,
	},
	user__04__01__01__height__02__: {
		flex: 7,
		justifyContent: 'center',
	},
	user__04__01__01__height__02__text: {
		fontSize: 36,
		textAlign: 'center',
	},
	user__04__01__02__weight__: {
		flex: 5,
	},
	user__04__01__01__weight__01__: {
		flex: 3,
		justifyContent: 'center',
	},
	user__04__01__01__weight__01__text: {
		fontSize: 18,
	},
	user__04__01__01__weight__02__: {
		flex: 7,
		justifyContent: 'center',
	},
	user__04__01__01__weight__02__text: {
		fontSize: 36,
		textAlign: 'center',
	},
	user__04__02__bmi__: {
		flex: 5,
	},
	user__04__02__bmi__01__title__: {
		flex: 3,
		justifyContent: 'center',
	},
	user__04__02__bmi__01__title__text: {
		fontSize: 30,
		textAlign: 'center',
	},

	user__04__02__bmi__02__value__: {
		flex: 4,
		justifyContent: 'center',
	},
	user__04__02__bmi__02__value__text: {
		fontSize: 35,
		textAlign: 'center',
	},
	user__04__02__bmi__03__state__: {
		flex: 3,
		justifyContent: 'center',
	},
	user__04__02__bmi__03__state__text: {
		fontSize: 30,
		textAlign: 'center',
	},
	login__logout: {
		backgroundColor: 'pink',
		flex: 2,
	},
});
