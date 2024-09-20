import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 RTL Employee Management</p>
    </footer>
  );
};

const footerStyle = {
  background: 'rgb(255, 165, 0)',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  width: '100%',
  bottom: '0'
};

export default Footer;
