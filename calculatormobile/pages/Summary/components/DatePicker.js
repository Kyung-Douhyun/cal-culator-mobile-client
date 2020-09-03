import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';
export default function DatePicker({ setDatePickerOpen, setDate }) {
  return (
    <View style={styles.datePicker}>
      <Calendar
        onDayPress={(day) => {
          setDate(day.dateString);
          setDatePickerOpen(false);
        }}
        // onDayLongPress={(day) => {
        //   console.log('selected day', day);
        // }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideExtraDays={false}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {
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
