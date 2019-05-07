import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LinkStyle = {
  paddingLeft: 8,
  paddingRight: 8,
  textDecoration: 'none',
  color: '#fff'
};

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link style={LinkStyle} to="/">
        Home
      </Link>
      <Link style={LinkStyle} to="/calculator">
        Calculator
      </Link>
      <Link style={LinkStyle} to="/weather">
        Weather
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
