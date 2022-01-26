import * as types from '../constants/actionTypes.js';

const initialState = {
  title: "",
  content: "Loading...",
  examples: "",
  status: "",
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
        status: "initial",
      };
    }
    default: {
      return state;
    }
  }
};

export default algoReducer;