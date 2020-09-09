import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';
import summaryReducer from './reducers/summaryReducer';
import homeReducer from './reducers/homeReducer';

const rootReducer = combineReducers({
	userInfo: userInfoReducer,
	summaryInfo: summaryReducer,
	homeInfo: homeReducer,
});

export default createStore(rootReducer);
