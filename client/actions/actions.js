import * as types from '../constants/actionTypes';

export const clearAllTestStatus = () => {
  return {
    type: types.CLEAR_ALL_TEST_STATUS,
  };
}

export const setTestStatus = ({ idx, status, error }) => {
  return {
    type: types.SET_TEST_STATUS,
    payload: { idx, status, error },
  };
}

export const fetchAndSetAlgo = (dispatch) => {
  fetch('/api/algo')
    .then(res => res.json())
    .then(msg => {
      const { title, content, examples } = msg;
      dispatch({
        type: types.SET_ALGO,
        payload: { title, content, examples },
      });
    });
};

export const logIn = (username, password, dispatch) => {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(res => {
      if(res.ok) {
        dispatch({
          type: types.LOG_IN,
          payload: username,
        });
      }
    })
};

export const signUp = (username, password, dispatch) => {
  fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(res => {
      if(res.ok) {
        dispatch({
          type: types.LOG_IN,
          payload: username,
        });
      }
    });
};

export const logOut = (dispatch) => {
  fetch('/api/logout', {
    method: 'POST',
  })
    .then(res => {
      if(res.ok) {
        dispatch({
          type: types.LOG_OUT,
        });
      }
    });
};