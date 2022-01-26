import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm.jsx';
import { logIn } from '../actions/actions';

export default () => {
  const dispatch = useDispatch();
  const logInWrapper = (username, password) => {
    logIn(username, password, dispatch);
  };
  return <LoginForm logIn={logInWrapper} />;
};