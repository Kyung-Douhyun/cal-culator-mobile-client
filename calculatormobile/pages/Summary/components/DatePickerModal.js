import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import DatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';

export default function DatePickerModal({
	datePickerOpen,
	setDatePickerOpen,
	dwm,
	setDWM,
	dwmRef,
	setDwmRef,
}) {
	const [selectedDates, setSelectedDates] = useState(null);
	return (
		<Modal animationType='slide' transparent={false} visible={datePickerOpen}>
			<View style={styles.container}>
				{dwm.type === 'daily' ? (
					<DatePicker selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
				) : (
					<DateRangePicker selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
				)}
				<TouchableOpacity
					style={styles.cancelBtn}
					onPress={() => {
						setDWM(prevState => {
							return { ...prevState, type: dwmRef };
						});
						setSelectedDates(null);
						setDatePickerOpen(false);
					}}
				>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.confirmBtn}
					onPress={() => {
						let dateArr = Object.keys(selectedDates).sort();
						let returnDateStr =
							dwm.type === 'daily' ? dateArr[0] : `${dateArr[0]} ${dateArr[dateArr.length - 1]}`;
						setDWM(prevState => {
							return {
								...prevState,
								date: returnDateStr,
							};
						});
						setDatePickerOpen(false);
						setSelectedDates(null);
						setDwmRef(dwm.type);
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
