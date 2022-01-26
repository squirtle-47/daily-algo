import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav.jsx';
import { logOut } from '../actions/actions';

export default () => {
  const { loggedIn, username } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logOutWrapper = () => {
    logOut(dispatch);
  };

  return <Nav loggedIn={loggedIn} username={username} logOut={logOutWrapper} />;
}