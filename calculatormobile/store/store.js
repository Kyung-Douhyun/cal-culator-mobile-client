import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';
import summaryReducer from './reducers/summaryReducer';
import homeReducer from './reducers/homeReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
	userInfo: userInfoReducer,
	summaryInfo: summaryReducer,
	homeInfo: homeReducer,
	cartInfo: cartReducer,
});

export default createStore(rootReducer);
