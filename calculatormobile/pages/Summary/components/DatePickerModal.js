import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import DatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';
import * as actionTypes from '../../../store/actions';

function DatePickerModal({ summaryInfo, calendarCancel, calendarConfirm }) {
	const [selectedDates, setSelectedDates] = useState(null);
	return (
		<Modal animationType='slide' transparent={false} visible={summaryInfo.datePickerOpen}>
			<View style={styles.container}>
				{summaryInfo.dwm === 'daily' ? (
					<DatePicker selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
				) : (
					<DateRangePicker selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
				)}
				<TouchableOpacity
					style={styles.cancelBtn}
					onPress={() => {
						calendarCancel();
						setSelectedDates(null);
					}}
				>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.confirmBtn}
					onPress={() => {
						calendarConfirm(selectedDates);
						setSelectedDates(null);
					}}
				>
					<Text>Confirm</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	confirmBtn: {
		position: 'absolute',
		bottom: 100,
		right: 100,
	},
	cancelBtn: {
		position: 'absolute',
		bottom: 100,
		left: 100,
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		calendarCancel: () => {
			dispatch({ type: actionTypes.CALENDAR_CANCEL });
		},
		calendarConfirm: date => {
			dispatch({ type: actionTypes.CALENDAR_CONFIRM, payload: date });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerModal);
