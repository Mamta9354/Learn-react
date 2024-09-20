// RegisterPage.js
import React from 'react';

const RegisterPage = () => {
  return (
    <div style={pageStyle}>
      <h2>Register</h2>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" name="confirmPassword" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '50px'
};

export default RegisterPage;
