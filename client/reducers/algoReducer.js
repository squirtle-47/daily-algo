import * as types from '../constants/actionTypes.js';

const initialState = {
  title: "foobar",
  content: "Loading...",
  examples: "",
};

const algoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALGO: {
      const { title, content, examples } = action.payload;
      return {
        ...state,
        title,
        content,
        examples,
      };
    }
    default: {
      return state;
    }
  }
};

export default algoReducer;