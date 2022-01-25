import { combineReducers } from 'redux';
import algoReducer from './algoReducer.js';
import authReducer from './authReducer.js';

const reducers = combineReducers({
  algo: algoReducer,
  auth: authReducer,
});

export default reducers;