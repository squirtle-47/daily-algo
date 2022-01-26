import * as types from '../constants/actionTypes.js';

const initialState = {
  title: "",
  content: "Loading...",
  examples: "",
  status: "",
  algo_id: "",
};

const algoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALGO: {
      const { title, content, examples, algo_id } = action.payload;
      return {
        ...state,
        title,
        content,
        examples,
        algo_id,
        status: "initial",
      };
    }
    default: {
      return state;
    }
  }
};

export default algoReducer;