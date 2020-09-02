import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {globalStyle} from '../styles/styles';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import DWMButtons from './components/DWMButtons';
import Chart from './components/Chart';
import ReportType from './components/ReportType';

export default function Summary() {
  return (
    <View style={globalStyle.page}>
      <Header pageName="Summary" />
      <View style={globalStyle.container}>
        <DWMButtons />
        <Chart />
        <ReportType />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({});
