import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { globalStyle } from '../styles/styles';

import DWMButtons from './components/DWMButtons';
import Chart from './components/Chart';
import ReportType from './components/ReportType';
import DatePicker from './components/DatePicker';

export default function Summary() {
	const [showChart, setShowChart] = useState(true);
	const [datePickerOpen, setDatePickerOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const [dwm, setDWM] = useState('daily');
	return (
		<View style={globalStyle.page}>
			<Modal animationType='slide' transparent={false} visible={datePickerOpen}>
				<DatePicker setDatePickerOpen={setDatePickerOpen} setDate={setDate} />
			</Modal>
			<View style={globalStyle.container}>
				<DWMButtons setDWM={setDWM} setDatePickerOpen={setDatePickerOpen} />
				{showChart ? <Chart dwm={dwm} date={date} /> : <Details dwm={dwm} />}
				<ReportType setShowChart={setShowChart} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
