import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import { Calendar } from 'react-native-calendars';
import ConfirmModal from './ConfirmModal';

function SelectDateAndAdd({ homeInfo, openHomeCalendar, selectDate, openAddToCartHandler }) {
	return (
		<View style={styles.container}>
			<Modal animationType='slide' transparent={false} visible={homeInfo.datePickerOpen}>
				<View style={styles.datePicker}>
					<Calendar
						onDayPress={day => {
							selectDate(day.dateString);
						}}
						monthFormat={'yyyy MM'}
						hideExtraDays={false}
						disableMonthChange={true}
						firstDay={1}
						hideDayNames={false}
						onPressArrowLeft={subtractMonth => subtractMonth()}
						onPressArrowRight={addMonth => addMonth()}
						disableAllTouchEventsForDisabledDays={true}
						renderHeader={date => {
							const month = date.toString().split(' ')[1];
							const year = date.getFullYear();
							return <Text>{`${month.toUpperCase()} ${year}`}</Text>;
						}}
						enableSwipeMonths={true}
					/>
				</View>
			</Modal>
			<Modal animationType='fade' transparent={false} visible={homeInfo.confirmCartOpen}>
				<ConfirmModal />
			</Modal>

			<TouchableOpacity onPress={() => openHomeCalendar()}>
				<Text>{homeInfo.selectedDate}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					if (homeInfo.foodName) {
						openAddToCartHandler();
					} else {
						Alert.alert('먼저 검색해주세요!', '검색하신 항목이 없습니다', [{ text: '알겠습니다' }]);
					}
				}}
			>
				<Text>카트담기</Text>
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
		backgroundColor: 'pink',
	},
	datePicker: {
		justifyContent: 'center',
		flex: 1,
		width: '100%',
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		openHomeCalendar: () => {
			dispatch({ type: actionTypes.OPEN_HOME_CALENDAR });
		},
		selectDate: dateStr => {
			dispatch({ type: actionTypes.SELECT_DATE, payload: dateStr });
		},
		openAddToCartHandler: () => {
			dispatch({ type: actionTypes.OPEN_ADD_TO_CART });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDateAndAdd);
