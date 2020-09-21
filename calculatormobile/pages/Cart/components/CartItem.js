import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function CartItem({ item, idx, checkHandler }) {
	const { date, foodName, amount, calories, isChecked } = item;

	return (
		<ListItem bottomDivider style={styles.card}>
			<CheckBox
				center
				checkedIcon='check-circle'
				uncheckedIcon='times-circle'
				containerStyle={styles.checkBox}
				checkedColor='green'
				uncheckedColor='red'
				checked={isChecked}
				onPress={() => checkHandler(idx)}
			/>
			<ListItem.Content style={styles.content}>
				<ListItem.Title style={styles.text}>{foodName}</ListItem.Title>
				<View style={styles.subtitleView}>
					<Text style={styles.text}>날짜: {date}</Text>
					<Text style={styles.text}>인분: {amount}</Text>
					<Text style={styles.text}>칼로리: {calories * amount}</Text>
				</View>
			</ListItem.Content>
		</ListItem>
	);
}

const styles = StyleSheet.create({
	card: {
		borderBottomColor: '#663',
		borderBottomWidth: 1,
	},
	subtitleView: {
		flexDirection: 'row',
		paddingTop: 5,
	},
	textFirst: {
		color: '#333',
	},
	text: {
		paddingLeft: 10,
		color: '#333',
	},
	checkBox: {
		position: 'absolute',
		left: -5,
	},
	content: {
		paddingLeft: 10,
	},
});

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		checkHandler: idx => {
			dispatch({ type: actionTypes.CHECK_CART_ITEM_HANDLER, payload: idx });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
