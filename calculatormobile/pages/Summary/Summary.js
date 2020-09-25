import React, { useState } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { globalStyle } from '../styles/styles';

import DWMButtons from './components/DWMButtons';
import DailyChart from './components/DailyChart';
import RangeChart from './components/RangeChart';
import MonthlyChart from './components/MonthlyChart';
import DailyDetails from './components/DailyDetails';
import RangeDetails from './components/RangeDetails';
import MonthlyDetails from './components/MonthlyDetails';
import ReportType from './components/ReportType';
import DatePickerModal from './components/DatePickerModal';

function Summary({ summaryInfo }) {
	const { showChart, dwm } = summaryInfo;
	const chartOrDetails = () => {
		return showChart && dwm === 'daily' ? (
			<DailyChart />
		) : showChart && dwm === 'range' ? (
			<RangeChart />
		) : showChart && dwm === 'monthly' ? (
			<MonthlyChart />
		) : dwm === 'daily' ? (
			<DailyDetails />
		) : dwm === 'range' ? (
			<RangeDetails />
		) : (
			<MonthlyDetails />
		);
	};

	return (
		<View style={{ backgroundColor: '#eee', flex: 1 }}>
			<DatePickerModal />
			<View style={globalStyle.container}>
				<DWMButtons />
				{chartOrDetails()}
				<ReportType />
			</View>
		</View>
	);
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
