// LoginPage.js
import React from 'react';

const LoginPage = () => {
  return (
    <div style={pageStyle}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '50px'
};

export default LoginPage;
