import * as types from '../constants/actionTypes';

export const fetchAndSetAlgo = (dispatch) => {
  fetch('/api/algo')
    .then(res => res.json())
    .then(msg => {
      const { title, content, examples, algo_id } = msg;
      dispatch({
        type: types.SET_ALGO,
        payload: { title, content, examples, algo_id },
      });
    });
};

export const fetchAndSetStats = (dispatch) => {
  fetch('/api/stats')
    .then(res => res.json())
    .then(msg => {
      const completionDates = msg.dates.map(x => x.date_submitted);
      dispatch({
        type: types.SET_STATS,
        payload: completionDates,
      });
    });
}

export const setDummyStats = (completionDates, dispatch) => {
  dispatch({
    type: types.SET_STATS,
    payload: completionDates,
  })
}

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