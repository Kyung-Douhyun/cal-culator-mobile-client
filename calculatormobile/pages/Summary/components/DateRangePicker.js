import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';
import pickRangeDates from '../helperFunctions/pickRangeDates';

export default function DateRangePicker({ selectedDates, setSelectedDates }) {
	return (
		<View style={styles.datePicker}>
			<Calendar
				onDayPress={day => {
					setSelectedDates(pickRangeDates(selectedDates, day.dateString));
				}}
				markingType='period'
				markedDates={selectedDates}
				// onDayLongPress={(day) => {
				//   console.log('selected day', day);
				// }}
				monthFormat={'yyyy MM'}
				// onMonthChange={(month) => {
				//   console.log('month changed', month);
				// }}
				hideExtraDays={false}
				disableMonthChange={true}
				firstDay={1}
				hideDayNames={false}
				onPressArrowLeft={subtractMonth => subtractMonth()}
				onPressArrowRight={addMonth => addMonth()}
				disableAllTouchEventsForDisabledDays={true}
				renderHeader={date => {
					const month = date.toString().split(' ')[1];
					const year = date.getFullYear();
					return <Text>{`${month.toUpperCase()} ${year}`}</Text>;
				}}
				enableSwipeMonths={true}
			/>
		</View>
	);
}
// setDate(day.dateString);
// setDatePickerOpen(false);

const styles = StyleSheet.create({
	datePicker: {
		justifyContent: 'center',
		flex: 1,
		width: '100%',
	},
});
