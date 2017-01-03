import React from 'react';
import '../stylesheets/App.css';
import Name from './Name'
import NameForm from './NameForm'

const App = React.createClass({
  getInitialState() {
    return {
      appState: [
        {
          id: '0',
          studentName: 'zero'
        },
        {
          id: '1',
          studentName: 'one'
        },
        {
          id: '2',
          studentName: 'two'
        }
      ]
    };
  },
  removeName(id) {
    const deletedNames = this.state.appState.filter((person) => {
      return person.id !== id;
    });
    this.setState({
      appState: deletedNames
    });
  },
  addStudent(name) {
    const addNames = this.state.appState;
    addNames.push({
      id: this.state.appState.length.toString(),
      studentName: name
    })
    this.setState({
      appState: addNames
    });
  },
  renderNames() {
    return this.state.appState.map((person, i) => {
      return (
        <div key={person.id}>
        <Name
        id={person.id}
        studentName={person.studentName}
        onRemoveName={() => this.removeName(person.id)}/>
        </div>
      );
    });
  },
  render() {
    return (
      <div className='container parentContainer'>
      <div>
        <h1>Welcome to React</h1>
        <NameForm onSubmit={this.addStudent}/>
        </div>
        {this.renderNames()}
      </div>
    );
  }
});


export default App;
