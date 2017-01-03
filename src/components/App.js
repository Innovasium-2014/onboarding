import React from 'react';
import '../stylesheets/App.css';

const App = React.createClass({
  getInitialState() {
    return {
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
          id={person.id}
          studentName={person.name}
          onRemoveName={() => this.removeName(person.id)}/>
        </div>
      );
    });
  },

  render() {
    return (
      <div className='container parentContainer'>
        <div>
          <h1>
            Welcome to React
          </h1>
          <NameForm onSubmit={this.addStudent}/>
        </div>
        {this.renderNames()}
      </div>
    );
  }
});


export default App;
