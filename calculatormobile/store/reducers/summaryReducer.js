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
			let dateArr = Object.keys(action.payload).sort();
			let dateStr;
			if (state.dwm === 'daily') {
				dateStr = dateArr[0];
			} else {
				dateStr = `${dateArr[0]} ${dateArr[dateArr.length - 1]}`;
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

		default:
			return state;
	}
};

export default reducer;
