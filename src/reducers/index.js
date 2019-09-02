import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import searchReducer from './searchReducer';

export default combineReducers({
   fetchReducer: fetchReducer,
   searchReducer: searchReducer
});