import * as types from '../constants/actionTypes';

export const fetchAndSetAlgo = (dispatch) => {
  fetch('/api/algo')
    .then(data => data.json())
    .then(msg => {
      console.log("Got message:", msg);
      const { title, content, examples } = msg;
      dispatch({
        type: types.SET_ALGO,
        payload: { title, content, examples },
      });
    });
};