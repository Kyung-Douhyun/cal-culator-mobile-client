import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function DWMButton({ openCalendar }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: '#28df99' }}
				onPress={() => {
					openCalendar('daily');
				}}
			>
				<Text style={styles.font}>Daily</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: '#07689f' }}
				onPress={() => {
					openCalendar('range');
				}}
			>
				<Text style={styles.font}>Weekly</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ ...styles.btn, backgroundColor: '#e94560' }}
				onPress={() => {
					openCalendar('monthly');
				}}
			>
				<Text style={styles.font}>Monthly</Text>
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
		backgroundColor: '#eee',
	},
	btn: {
		width: '25%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		borderRadius: 10,
	},
	font: {
		fontWeight: 'bold',
		color: '#333',
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
