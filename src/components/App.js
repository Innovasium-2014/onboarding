import React from 'react';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';

const App = React.createClass({
  getInitialState() {
    // TODO extract this state into the students reducer.
    return {
      appState: [
        {
          id: '0',
          name: 'William'
        },
        {
          id: '1',
          name: 'Andrew'
        },
        {
          id: '2',
          name: 'Julian'
        },
        {
          id: '3',
          name: 'Alex'
        },
        {
          id: '4',
          name: 'Jeremy'
        },
        {
          id: '5',
          name: 'Jordan'
        }
      ]
    };
  },

  removeName(id) {
    const deletedNameList = this.state.appState.filter((person) => {
      return person.id !== id;
    });
    this.setState({
      appState: deletedNameList
    });
  },

  addStudent(studentName) {
    const nameList = this.state.appState;
    nameList.push({
      id: nameList.length.toString(),
      name: studentName
    });
    this.setState({
      appState: nameList
    });
  },

  renderNames() {
    return this.state.appState.map((person, i) => {
      return (
        <div key={person.id}>
          <Name
            studentName={person.name} id={person.id}
            onRemoveName={() => this.removeName(person.id)}
          />
        </div>
      );
    });
  },

  render() {
    return (
      <div className='container parentContainer'>
        <div>
          <h1 className='header'>Welcome to React</h1>
          <NameForm onSubmit={this.addStudent} />
        </div>
        {this.renderNames()}
      </div>
    );
  }
});


export default App;
