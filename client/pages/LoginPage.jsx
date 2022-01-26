import React from 'react';
import NavContainer from '../containers/NavContainer.jsx';
import LoginContainer from '../containers/LoginContainer.jsx';

export default () => {
  return <>
    <NavContainer />
    <br />
    <h1>Login</h1>
    <LoginContainer />
  </>;
}