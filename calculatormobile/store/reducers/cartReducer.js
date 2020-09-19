/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CART:
			return [...state, action.payload];
		case actionTypes.DEL_CART:
			const newState1 = state
				.filter(item => !item.isChecked)
				.map(item => {
					return { ...item };
				});
			return newState1;
		case actionTypes.CHECK_CART_ITEM_HANDLER:
			state[action.payload].isChecked = !state[action.payload].isChecked;
			const newState2 = state.map(item => {
				return { ...item };
			});
			return newState2;
		default:
			return state;
	}
};

export default reducer;

// need
// [{date, amount, user_id, food_id}]
