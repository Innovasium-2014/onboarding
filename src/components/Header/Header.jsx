import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ROOT, CALCULATOR, WEATHER, SOCIAL_CARD } from '../../constants/Routes'

const LinkStyle = {
  paddingLeft: 8,
  paddingRight: 8,
  textDecoration: 'none',
  color: '#fff'
};

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link style={LinkStyle} to={ROOT}>
        Home
      </Link>
      <Link style={LinkStyle} to={CALCULATOR}>
        Calculator
      </Link>
      <Link style={LinkStyle} to={SOCIAL_CARD}>
        Social Card
      </Link>
      <Link style={LinkStyle} to={WEATHER}>
        Weather
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
