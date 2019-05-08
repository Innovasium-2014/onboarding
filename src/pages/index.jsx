import React from 'react';

import NameForm from '../components/NameForm';
import Name from '../components/Name';
import StudentNames from '../constants/StudentNames';

// here is the class version of this component with no logic
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: StudentNames
    }

    this.deleteStudent = this.deleteStudent.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }

  deleteStudent(studentId) {
    const students = this.state.students
    students.splice(studentId, 1)
    this.setState({students})
  }

  addStudent(studentName) {
    const { students } = this.state

    if (typeof studentName != 'string' ||
       !(studentName.trim()) ||
       students.includes(studentName, 0))
      return
    
    students.push(studentName)
    students.sort()

    this.setState({students})
  }

  render() {
    return (
      <React.Fragment>
        <NameForm addStudent = { this.addStudent } />
        { 
          this.state.students.length > 0 ?

          <div style = {{ display: 'flex' }}>
            {this.state.students.map((name, nameIndex) => (
              <div style = {{ padding: 16 }} key = { `student-name-${nameIndex}` }>
                <Name studentName = { name } deleteStudent={() => this.deleteStudent(nameIndex)} />
              </div>
            ))}
          </div>

          :

          <div>
            <h2>Add some students!</h2>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Home;
