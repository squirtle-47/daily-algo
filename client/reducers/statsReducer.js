import * as types from '../constants/actionTypes';

const initialState = {
  completionDates: [],
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STATS: {
      return {
        ...state,
        completionDates: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default statsReducer;