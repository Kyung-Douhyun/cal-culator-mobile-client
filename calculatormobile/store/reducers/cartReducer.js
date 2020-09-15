/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CART:
			return [...state, action.payload];
		case actionTypes.DEL_CART:
			return [];
		default:
			return state;
	}
};

export default reducer;

// need
// [{date, amount, user_id, food_id}]
