import { combineReducers } from 'redux';
import algoReducer from './algoReducer.js';

const reducers = combineReducers({
  algo: algoReducer,
});

export default reducers;