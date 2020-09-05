import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import DWMButtons from './components/DWMButtons';
import DailyChart from './components/DailyChart';
import RangeChart from './components/RangeChart';
import ReportType from './components/ReportType';
import DatePickerModal from './components/DatePickerModal';

export default function Summary() {
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
      <Header pageName="Summary" />
      <View style={globalStyle.container}>
        <DWMButtons setDWM={setDWM} setDatePickerOpen={setDatePickerOpen} />
        {dwm.type === 'daily' ? (
          <DailyChart dwm={dwm} />
        ) : (
          <RangeChart dwm={dwm} />
        )}
        <ReportType setShowChart={setShowChart} />
      </View>
      <Footer />
    </View>
  );
}
