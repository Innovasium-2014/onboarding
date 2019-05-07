import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/index';
import Calculator from './pages/Calculator';
import Weather from './pages/Weather';
import Header from './components/Header';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Header />
      <div style={{ padding: 16 }}>
        <Route component={HomePage} exact path="/" />
        <Route component={Calculator} exact path="/calculator" />
        <Route component={Weather} exact path="/weather" />
      </div>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
