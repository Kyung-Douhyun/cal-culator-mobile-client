/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	isLogin: false,
	userId: '',
	userAge: '',
	userGender: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isLogin: true,
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				isLogin: false,
				userId: '',
			};
		case actionTypes.USER:
			return {
				...state,
				userId: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
