import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function CartItem({ item, idx, checkHandler }) {
	const { date, foodName, amount, calories, isChecked } = item;

	return (
		<ListItem bottomDivider>
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
				<ListItem.Title>{foodName}</ListItem.Title>
				<View style={styles.subtitleView}>
					<Text style={styles.text}>Date: {date}</Text>
					<Text style={styles.text}>Servings: {amount}</Text>
					<Text style={styles.text}>Calories: {calories * amount}</Text>
				</View>
			</ListItem.Content>
		</ListItem>
	);
}

const styles = StyleSheet.create({
	subtitleView: {
		flexDirection: 'row',
		paddingTop: 5,
	},
	text: {
		paddingLeft: 10,
		color: 'grey',
	},
	checkBox: {
		position: 'absolute',
		left: -10,
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
