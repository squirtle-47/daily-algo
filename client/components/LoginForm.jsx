import React from 'react';

export default ({ logIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    logIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text" htmlFor="username">Username</label>
      <br />
      <input name="username" id="username-input" />
      <br />
      <label className="text" htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <button className="logoutButton" type="submit" style={{margin: "10px"}}>Submit</button>
    </form>
  );
};