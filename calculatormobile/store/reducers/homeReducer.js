/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	foodInfo: {
		image: require('../../asset/Image/cal_culator.jpg'),
	},
	foodName: '',
	foodId: '',
	selectedDate: new Date().toISOString().slice(0, 10),
	datePickerOpen: false,
	confirmCartOpen: false,
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
		case actionTypes.SEARCH_HANDLER:
			return {
				...state,
				foodName: action.payload,
			};
		case actionTypes.FOOD_IMAGE_HANDLER:
			return {
				...state,
				foodInfo: {
					image: action.payload,
				},
			};
		case actionTypes.FOOD_ID_HANDLER:
			return {
				...state,
				foodId: action.payload,
			};
		case actionTypes.OPEN_ADD_TO_CART:
			return {
				...state,
				confirmCartOpen: true,
			};
		case actionTypes.CANCEL_ADD_TO_CART:
			return {
				...state,
				confirmCartOpen: false,
			};
		default:
			return state;
	}
};

export default reducer;
