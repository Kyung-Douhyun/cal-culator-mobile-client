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

import * as actionTypes from '../../store/actions';

function Summary({ userInfo }) {
	console.log(userInfo);
	const [showChart, setShowChart] = useState(true);
	const [datePickerOpen, setDatePickerOpen] = useState(false);
	const [dwmRef, setDwmRef] = useState('daily');
	const [dwm, setDWM] = useState({
		type: 'daily',
		date: new Date().toISOString().slice(0, 10),
	});
	return (
		<View style={globalStyle.page}>
			<DatePickerModal
				dwm={dwm}
				setDWM={setDWM}
				datePickerOpen={datePickerOpen}
				setDatePickerOpen={setDatePickerOpen}
				dwmRef={dwmRef}
				setDwmRef={setDwmRef}
			/>
			<View style={globalStyle.container}>
				<DWMButtons setDWM={setDWM} setDatePickerOpen={setDatePickerOpen} />
				<DailyDetails dwm={dwm} />
				<ReportType setShowChart={setShowChart} />
			</View>
		</View>
	);
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: () => {
			dispatch({ type: actionTypes.LOGIN });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);

// {dwm.type === 'daily' ? <DailyChart dwm={dwm} /> : dwm.type === 'range' ? <RangeChart dwm={dwm} /> : <MonthlyChart dwm={dwm} />}
