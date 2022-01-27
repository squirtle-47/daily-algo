import React from 'react';

export default ({ signUp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const passwordConfirm = formData.get('password-confirm');
    if (password !== passwordConfirm) {
      return;
    }
    signUp(username, password);
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
      <label className="text" htmlFor="password-confirm">Confirm password</label>
      <br />
      <input type="password" name="password-confirm" />
      <br />
      <button className="logoutButton" type="submit">Submit</button>
      <br />
    </form>
  );
};