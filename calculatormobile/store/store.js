import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';
import summaryReducer from './reducers/summaryReducer';

const rootReducer = combineReducers({
	userInfo: userInfoReducer,
	summaryInfo: summaryReducer,
});

export default createStore(rootReducer);
