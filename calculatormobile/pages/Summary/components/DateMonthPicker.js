import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MonthSelectorCalendar from 'react-native-month-selector';
import moment from 'moment';

function DateMonthPicker({ selectedDates, setSelectedDates }) {
	useEffect(() => {
		setSelectedDates(moment());
	}, []);
	return (
		<View style={styles.container}>
			<MonthSelectorCalendar
				selectedDate={selectedDates === null ? moment() : selectedDates}
				onMonthTapped={date => {
					setSelectedDates(moment(date));
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
	},
});

export default DateMonthPicker;
