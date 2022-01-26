import { combineReducers } from 'redux';
import algoReducer from './algoReducer.js';
import authReducer from './authReducer.js';
import statsReducer from './statsReducer.js';

const reducers = combineReducers({
  algo: algoReducer,
  auth: authReducer,
  stats: statsReducer,
});

export default reducers;