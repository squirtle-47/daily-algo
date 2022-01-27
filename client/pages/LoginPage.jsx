import React from 'react';
import NavContainer from '../containers/NavContainer.jsx';
import LoginContainer from '../containers/LoginContainer.jsx';

export default () => {
  return <>
    <NavContainer />
    <br />
    <h3 className="algoName">Login</h3>
    <LoginContainer />
  </>;
}