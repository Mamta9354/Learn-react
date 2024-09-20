import React from 'react';
import { link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div style={landingPageStyle}>
      <p>Welcome to Employee Management</p>
      <div>
        <link to="/login">
        <button style={buttonStyle}>User Login</button>
        </link>
        <link to="/Login">
        <button style={buttonStyle}>New User Register</button>
        
      </div>
    </div>
  );
};

const landingPageStyle = {
  textAlign: 'center',
  padding: '50px'
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px'
};

export default LandingPage;
