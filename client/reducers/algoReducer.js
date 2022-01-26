import * as types from '../constants/actionTypes.js';

const initialState = {
  title: "foobar",
  content: "Loading...",
  examples: "",
  algo_id: "",
  tests: [],
};

const algoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALGO: {
      const { title, content, examples, algo_id, tests } = action.payload;
      const testArray = tests.map(test => ({
        test,
        result: null,
        error: null,
      }));
      return {
        ...state,
        title,
        content,
        examples,
        algo_id,
        tests: testArray,
      };
    }
    case CLEAR_ALL_TEST_STATUS: {
      const testArray = state.tests.map(test => ({
        test: test.test,
        result: null,
        error: null,
      }));
      return {
        ...state,
        testArray,
      }
    }
    case SET_TEST_STATUS: {
      const { idx, status, error } = action.payload;
      const testArray = [...state.tests];
      testArray[idx] = {
        test: testArray[idx].test,
        status,
        error: error || null,
      };
      return {
        ...state,
        testArray,
      }
    }
    default: {
      return state;
    }
  }
};

export default algoReducer;