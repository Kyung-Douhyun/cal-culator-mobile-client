import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';
import pickSingleDate from '../helperFunctions/pickSingleDate';

export default function DatePicker({ selectedDates, setSelectedDates }) {
	return (
		<View style={styles.datePicker}>
			<Calendar
				onDayPress={day => {
					console.log(1231231);
					setSelectedDates(pickSingleDate(day.dateString));
				}}
				markingType='custom'
				markedDates={selectedDates}
				monthFormat={'yyyy MM'}
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

const styles = StyleSheet.create({
	datePicker: {
		justifyContent: 'center',
		flex: 1,
		width: '100%',
	},
});
