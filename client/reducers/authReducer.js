import * as types from '../constants/actionTypes';

const cookieMap = document.cookie
  .split(';')
  .filter(el => !!el)
  .map(token => token.split('='))
  .reduce((acc, token) => {
    acc[decodeURIComponent(token[0].trim())] = decodeURIComponent(token[1].trim());
    return acc;
  }, {});

const initialState = {
  username: cookieMap['username'] || null,
  loggedIn: !!cookieMap['username'],
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN: {
      return {
        ...state,
        username: action.payload,
        loggedIn: true,
      };
    }
    case types.LOG_OUT: {
      return {
        ...state,
        username: null,
        loggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;