// import React, { useState } from 'react';
// import { View, Button, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DatePicker = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//     console.log(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="inline"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default DatePicker;
import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';
export default function DatePicker({ setDatePickerOpen }) {
  return (
    <View style={styles.datePicker}>
      <Calendar
        onDayPress={(day) => {
          console.log('selected day', day);
          setDatePickerOpen(false);
        }}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
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
