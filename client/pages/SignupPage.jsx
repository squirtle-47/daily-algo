import React from 'react';
import NavContainer from '../containers/NavContainer.jsx'
import SignupContainer from '../containers/SignupContainer.jsx';

export default () => {
  return <>
    <NavContainer />
    <br />
    <h3 className="algoName">Signup</h3>
    <SignupContainer />
  </>;
};