import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import { addFoodUsersQuery } from '../queries';

function DeleteAndConfirm({ cartInfo, userInfo, deleteCartHandler }) {
	const [addFoodUsers] = useMutation(addFoodUsersQuery);

	const addToFoodUserHandler = () => {
		const userId = userInfo.userId;
		const sendingData = cartInfo
			.filter(item => item.isChecked)
			.map(item => {
				return { date: item.date, amount: item.amount, user_id: userId, food_id: item.foodId };
			});
		addFoodUsers({
			variables: {
				list: sendingData,
			},
		});
		deleteCartHandler();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => {
					deleteCartHandler();
				}}
			>
				<Text>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.confirmBtn} onPress={() => addToFoodUserHandler()}>
				<Text>Confirm</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.8,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	deleteBtn: {
		width: '30%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e94560',
		borderRadius: 10,
	},
	confirmBtn: {
		width: '30%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#28df99',
		borderRadius: 10,
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		cartInfo: state.cartInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteCartHandler: () => {
			dispatch({ type: actionTypes.DEL_CART });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAndConfirm);
