import React, { useState } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
import { globalStyle } from '../styles/styles';

import DWMButtons from './components/DWMButtons';
import DailyChart from './components/DailyChart';
import RangeChart from './components/RangeChart';
import MonthlyChart from './components/MonthlyChart';
import DailyDetails from './components/DailyDetails';
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
		) : (
			<DailyDetails />
		);
		// dwm === 'daily' ? <DailyDetails />
	};

	return (
		<View style={globalStyle.page}>
			<DatePickerModal />
			<View style={globalStyle.container}>
				<DWMButtons />
				{/* <DailyDetails /> */}
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

// {dwm.type === 'daily' ? <DailyChart dwm={dwm} /> : dwm.type === 'range' ? <RangeChart dwm={dwm} /> : <MonthlyChart dwm={dwm} />}
