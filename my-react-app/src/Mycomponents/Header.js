import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Welcome to Employee Management</h1>
    </header>
  );
};

const headerStyle = {
  background: 'rgb(255, 165, 0)',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

export default Header;
