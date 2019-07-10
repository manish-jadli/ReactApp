import {combineReducers} from 'redux';
import UserReducer from '../reducer/reducer-user';
import ActiveUserReducer from '../reducer/reducer-active-user';

const allReducers=combineReducers({
users:UserReducer,
activeUser:ActiveUserReducer
});

export default allReducers;