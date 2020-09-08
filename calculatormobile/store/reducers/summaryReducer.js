/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	showChart: true,
	datePickerOpen: false,
	dwm: 'daily',
	dwmRef: 'daily',
	date: new Date().toISOString().slice(0, 10),
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CALENDAR_CANCEL:
			return {
				...state,
				dwm: state.dwmRef,
				datePickerOpen: false,
			};
		case actionTypes.CALENDAR_CONFIRM:
			let dateStr;
			if (state.dwm === 'daily') {
				let dateArr = Object.keys(action.payload).sort();
				dateStr = dateArr[0];
			} else if (state.dwm === 'range') {
				let dateArr = Object.keys(action.payload).sort();
				dateStr = `${dateArr[0]} ${dateArr[dateArr.length - 1]}`;
			} else {
				let currentDate = new Date(action.payload.toISOString().slice(0, 10));
				currentDate.setDate(currentDate.getDate() + 1);
				dateStr = currentDate.toISOString().slice(0, 7);
			}

			return {
				...state,
				date: dateStr,
				datePickerOpen: false,
				dwmRef: state.dwm,
			};
		case actionTypes.OPEN_CALENDAR:
			return {
				...state,
				dwm: action.payload,
				datePickerOpen: true,
			};
		case actionTypes.DISPLAY_OPTION:
			return {
				...state,
				showChart: action.payload === 'chart' ? true : false,
			};
		case actionTypes.DETAIL_SPECIFIC_DATE:
			return {
				...state,
				date: action.payload,
				dwm: 'daily',
			};
		default:
			return state;
	}
};

export default reducer;
