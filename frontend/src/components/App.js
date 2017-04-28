import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import { getStudents, addStudent, editStudent, removeStudent } from '../actions/StudentActions';

const { func, instanceOf } = React.PropTypes;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputError: '',
      inputValue: ''
    };
  }

  static propTypes = {
    students: instanceOf(Immutable.List),
    addStudent: func.isRequired,
    editStudent: func.isRequired,
    removeStudent: func.isRequired,
    getStudents: func.isRequired
  }

  componentDidMount() {
    this.props.getStudents();
  }

  addHandler = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({
        inputError: 'Cannot be blank'
      });
      return false;
    }
    this.props.addStudent(inputValue);
    this.setState({ inputError: '', inputValue: '' });
    return false;
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  renderNames() {
    return this.props.students.map((student) => {
      const studentId = student.get('id');
      return (
        <div key={studentId}>
          <Name
            name={student.get('name')}
            studentId={studentId}
            deleteHandler={() => this.props.removeStudent(studentId)}
            editHandler={() => this.props.editStudent(studentId)}
          />
        </div>
      );
    });
  }

  render() {
    const { inputError } = this.state;
    return (
      <div className='container app'>
        <h1>My app</h1>
        <NameForm
          value={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e)}
          addHandler={(e) => this.addHandler(e)}
        />
        { this.renderNames() }
        { inputError && inputError }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.students
  };
}

const actionCreators = {
  getStudents,
  addStudent,
  editStudent,
  removeStudent
};


export default connect(mapStateToProps, actionCreators)(App);
