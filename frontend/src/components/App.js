import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import { add, load, remove } from '../actions/StudentActions';

const { arrayOf, shape, number, string, func, instanceOf, oneOfType } = React.PropTypes;

class App extends React.Component {

  static propTypes = {
    addStudent: func.isRequired,
    loadStudents: func.isRequired,
    removeStudent: func.isRequired,
    students: oneOfType([
      instanceOf(Immutable.Iterable),
      arrayOf(
        shape({
          id: number.isRequired,
          name: string.isRequired
        })
      )
    ]).isRequired
  }

  componentDidMount() {
    this.props.loadStudents();
  }

  removeName(id) {
    this.props.removeStudent(id);
  }

  addStudent(studentName) {
    this.props.addStudent(studentName);
  }

  renderNames() {
    return this.props.students.map((person, i) => {
      return (
        <div key={person.get('id')}>
          <Name
            studentName={person.get('name')} id={person.get('id')}
            onRemoveName={() => this.removeName(person.get('id'))}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className='container parentContainer'>
        <div>
          <h1 className='header'>Welcome to React</h1>
          <NameForm onSubmit={(studentName) => this.addStudent(studentName)} />
        </div>
        {this.renderNames()}
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
  addStudent: add,
  loadStudents: load,
  removeStudent: remove
};

export default connect(mapStateToProps, actionCreators)(App);
