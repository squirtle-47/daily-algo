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
      <label htmlFor="username">Username</label>
      <input name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <label htmlFor="password-confirm">Confirm password</label>
      <input type="password" name="password-confirm" />
      <button type="submit">Submit</button>
    </form>
  );
};