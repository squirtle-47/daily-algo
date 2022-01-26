import React from 'react';
import NavContainer from '../containers/NavContainer.jsx'
import SignupContainer from '../containers/SignupContainer.jsx';

export default () => {
  return <>
    <NavContainer />
    <br />
    <h1>Signup</h1>
    <SignupContainer />
  </>;
};