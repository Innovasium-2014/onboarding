import React from 'react';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';

const App = React.createClass({

  getInitialState() {
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

  _renderNames() {
    return this.state.appState.map((person, i) => {
      return (
        <div key={person.id}>
          <Name studentName={person.name} id={person.id}
                _removeName={() => this._removeName(person.id)}/>
        </div>
      );
    });
  },

  _removeName(id) {
    const deletedNameList = this.state.appState.filter((person) => {
      return person.id !== id;
    });
    this.setState({
      appState: deletedNameList
    });
  },

  _addStudent(studentName) {
    const nameList = this.state.appState;
    nameList.push({
      id: nameList.length.toString(),
      name: studentName
    });
    this.setState({
      appState: nameList
    });
  },

  render() {
    return (
      <div className='container parentContainer'>
        <div>
          <h1 className='header'>Welcome to React</h1>
          <NameForm onSubmit={this._addStudent}/>
        </div>
        {this._renderNames()}
      </div>
    );
  }
});


export default App;
