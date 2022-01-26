import React from 'react';
import { useDispatch } from 'react-redux';
import SignupForm from '../components/SignupForm.jsx';
import { signUp } from '../actions/actions';

export default () => {
  const dispatch = useDispatch();
  const signUpWrapper = (username, password) => {
    signUp(username, password, dispatch);
  };
  return <SignupForm signUp={signUpWrapper} />;
};