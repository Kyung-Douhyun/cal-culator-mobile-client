/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	foodInfo: {
		image: 'https://source.unsplash.com/1600x900/?nature,water',
	},
	selectedDate: new Date().toISOString().slice(0, 10),
	datePickerOpen: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.OPEN_HOME_CALENDAR:
			return {
				...state,
				datePickerOpen: true,
			};
		case actionTypes.SELECT_DATE:
			return {
				...state,
				datePickerOpen: false,
				selectedDate: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
