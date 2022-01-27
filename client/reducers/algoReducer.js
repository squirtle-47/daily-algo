import * as types from '../constants/actionTypes.js';

const initialState = {
  title: "",
  content: "Loading...",
  examples: "",
  algo_id: "",
  tests: [],
  code: "",
};

const algoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALGO: {
      const { title, content, examples, algo_id, tests } = action.payload;
      const testArray = tests.map(test => ({
        test,
        status: null,
        error: null,
      }));
      return {
        ...state,
        title,
        content,
        examples,
        algo_id,
        attempts: 0,
        tests: testArray,
      };
    }
    case types.SET_EDITOR_CODE: {
      return {
        ...state,
        code: action.payload,
      }
    }
    case types.CLEAR_ALL_TEST_STATUS: {
      const testArray = state.tests.map(test => ({
        test: test.test,
        status: null,
        error: null,
      }));
      return {
        ...state,
        tests: testArray,
      }
    }
    case types.SET_TEST_STATUS: {
      const { idx, status, error } = action.payload;
      const testArray = [...state.tests];
      testArray[idx] = {
        test: testArray[idx].test,
        status,
        error: error || null,
      };
      return {
        ...state,
        tests: testArray,
      }
    }
    default: {
      return state;
    }
  }
};

export default algoReducer;