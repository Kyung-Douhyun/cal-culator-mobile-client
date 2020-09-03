import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { globalStyle } from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import DWMButtons from './components/DWMButtons';
import Chart from './components/Chart';
import ReportType from './components/ReportType';
import DatePicker from './components/DatePicker';

export default function Summary() {
  const [showChart, setShowChart] = useState(true);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [dwm, setDWM] = useState('daily');
  return (
    <View style={globalStyle.page}>
      <Modal animationType="slide" transparent={false} visible={datePickerOpen}>
        <DatePicker setDatePickerOpen={setDatePickerOpen} />
      </Modal>
      <Header pageName="Summary" />
      <View style={globalStyle.container}>
        <DWMButtons setDWM={setDWM} />
        {showChart ? <Chart dwm={dwm} /> : <Details dwm={dwm} />}
        <ReportType setShowChart={setShowChart} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({});
