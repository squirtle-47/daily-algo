import * as types from '../constants/actionTypes';

const initialState = {
  completionDates: [],
  successes: 0,
  attempts: 0,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STATS: {
      const completionDates = action.payload.map(x => x.completionDate).filter(x => !!x);
      const attempts = action.payload.map(x => x.attempts).reduce((acc, cur) => acc + cur, 0);
      return {
        ...state,
        completionDates,
        attempts,
        successes: completionDates.length,
      };
    }
    default: {
      return state;
    }
  }
};

export default statsReducer;