/* eslint-disable indent */
import * as actionTypes from '../actions';

const initialState = {
	userEmail: '',
	userName: '',
	userPw: '',
	userAge: '',
	userGender: '',
	userWeight: '',
	userHeight: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER:
			return {
				...state,
				userEmail: action.payload.email,
				userName: action.payload.name,
				userPw: action.payload.id,
				userAge: action.payload.age,
				userGender: action.payload.gender,
				userWeight: action.payload.weight,
				userHeight: action.payload.height,
			};
		default:
			return state;
	}
};

export default reducer;
