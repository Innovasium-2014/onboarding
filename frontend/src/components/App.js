import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';

const { arrayOf, shape, number, string, func, instanceOf, oneOfType } = React.PropTypes;

class App extends React.Component {
// create the app here
}

function mapStateToProps(state) {
  return {
    // add the state from the reducers here
  };
}

const actionCreators = {
  // add the actions here
};

export default connect(mapStateToProps, actionCreators)(App);
