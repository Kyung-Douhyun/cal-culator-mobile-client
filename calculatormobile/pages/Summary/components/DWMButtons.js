/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DWMButton({ setDWM, setDatePickerOpen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: 'green' }}
        onPress={() => {
          setDWM((prevState) => {
            return { ...prevState, type: 'daily' };
          });
          setDatePickerOpen(true);
        }}>
        <Text>Daily</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: 'blue' }}
        onPress={() => {
          setDWM((prevState) => {
            return { ...prevState, type: 'range' };
          });
          setDatePickerOpen(true);
        }}>
        <Text>Weekly</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: 'yellow' }}
        onPress={() => {
          setDWM((prevState) => {
            return { ...prevState, type: 'monthly' };
          });
          setDatePickerOpen(true);
        }}>
        <Text>Monthly</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  btn: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
