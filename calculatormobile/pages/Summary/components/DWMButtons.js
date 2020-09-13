import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function DWMButton({ openCalendar }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: 'green' }}
				onPress={() => {
					openCalendar('daily');
				}}
			>
				<Text>Daily</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: 'blue' }}
				onPress={() => {
					openCalendar('range');
				}}
			>
				<Text>Weekly</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: 'yellow' }}
				onPress={() => {
					openCalendar('monthly');
				}}
			>
				<Text>Monthly</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		marginBottom: 10,
	},
	btn: {
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const mapDispatchToProps = dispatch => {
	return {
		openCalendar: dateType => {
			dispatch({ type: actionTypes.OPEN_CALENDAR, payload: dateType });
		},
	};
};

export default connect(null, mapDispatchToProps)(DWMButton);
