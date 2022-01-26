import React from 'react';
import NavContainer from '../containers/NavContainer.jsx';
import CalendarContainer from '../containers/CalendarContainer.jsx';

export default () => {
  return <>
    <NavContainer />
    <br />
    <h1 className = "stats">Your Progress</h1>
    <CalendarContainer />
  </>;
};