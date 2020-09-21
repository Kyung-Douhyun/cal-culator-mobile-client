import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

function TotalCalories({ cartInfo }) {
	const totalCalories = cartInfo
		.filter(item => item.isChecked)
		.reduce((a, c) => a + c.amount * c.calories, 0)
		.toFixed(2);
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.cardContent}>총 칼로리: {totalCalories}kcal</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row',
	},
	card: {
		borderRadius: 8,
		width: '50%',
		marginRight: 25,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 5,
		backgroundColor: '#07689f',
	},
	cardContent: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		color: '#eee',
		fontWeight: 'bold',
	},
});

const mapStateToProps = state => {
	return {
		cartInfo: state.cartInfo,
	};
};

export default connect(mapStateToProps)(TotalCalories);
