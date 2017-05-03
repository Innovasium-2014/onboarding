import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import { addStudent } from '../actions/StudentActions';

const { func, instanceOf } = React.PropTypes;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputError: ''
    };
  }

  static propTypes = {
    students: instanceOf(Immutable.list),
    addStudent: func.isRequired
  }

  addHandler(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({
        inputError: ''
      });
      return false;
    }
    this.props.addStudent(inputValue);
    this.setState({ inputValue: '', inputError: '' });
    return false;
  }

  deleteHandler(e) {
    
  }

  _renderNames() {
    return this.props.students.map((student) => {
      const studentId = student.get('id');
      return (
        <div key={studentId}>
          <Name
            name={student.get('name')}
            studentId={studentId}
            deleteHandler={this.deleteHandler}
          />
        </div>
      );
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <NameForm
        value={this.state.inputValue}
        onChange={(e) => handleInputChange(e)}
        addHandler={(e) => this.addHandler(e)}
        />
        { this._renderNames }
      </div>
    );
  }

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
