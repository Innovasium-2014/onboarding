import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/index';
import Calculator from './pages/Calculator';
import SocialCard from './pages/SocialCard';
import Weather from './pages/Weather';
import Header from './components/Header';

import { ROOT, CALCULATOR, SOCIAL_CARD, WEATHER } from './constants/Routes';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Header />
      <div style={{ padding: 16 }}>
        <Route component={HomePage} exact path={ROOT} />
        <Route component={Calculator} exact path={CALCULATOR} />
        <Route component={SocialCard} exact path={SOCIAL_CARD} />
        <Route component={Weather} exact path={WEATHER} />
      </div>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
