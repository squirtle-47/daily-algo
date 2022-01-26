import React from 'react';
import { Link } from 'react-router-dom';

export default ({ loggedIn, username, logOut }) => {
  if (loggedIn) {
    return <>
    <div className = "leftNav">
      <Link to="/">Home</Link>
      <Link to="/stats">Stats</Link>
      </div>
      <div className = "rightNav">
      <span className = "rightNav">{username}</span>
      <button className = "logoutButton" onClick={logOut}>Logout</button>
      </div>
      <div className = "centerNav">
      <span>Daily Algo</span>
      </div>
    </>;
  }
  else {
    return <>
    <div className = "leftNav">
      <span>Daily Algo</span>
      </div>
      <div className = "rightNav">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      </div>
    </>;
  }
};