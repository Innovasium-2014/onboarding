import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './components/App';

const logger = createLogger();

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('App')
);