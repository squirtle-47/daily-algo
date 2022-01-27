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
      <label htmlFor="username">Username</label>
      <br />
      <input name="username" id="username-input" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};