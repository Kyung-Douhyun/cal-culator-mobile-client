import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';
import summaryReducer from './reducers/summaryReducer';
import homeReducer from './reducers/homeReducer';
import cartReducer from './reducers/cartReducer';
import registerReducer from './reducers/registerReducer';

const rootReducer = combineReducers({
	userInfo: userInfoReducer,
	summaryInfo: summaryReducer,
	homeInfo: homeReducer,
	cartInfo: cartReducer,
	registerInfo: registerReducer,
});

export default createStore(rootReducer);
