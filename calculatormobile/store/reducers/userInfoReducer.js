/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	isLogin: false,
	userId: 'test',
	userAge: 26,
	userGender: 'Male',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isLogin: true,
			};
		default:
			return state;
	}
};

export default reducer;
