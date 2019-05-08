import React from 'react';

import NameForm from '../components/NameForm';
import Name from '../components/Name';

// here is the class version of this component with no logic
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [
        'Allan Legamaate',
        'Andrew Lazenka',
        'Brant Vanderveen',
        'Michael Vamvakas'
      ]
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
    // Copy students from state to temp var
    const students = this.state.students

    // Check duplicate and empty
    if(typeof studentName != 'string' ||
       !(studentName.trim()) ||
       students.includes(studentName, 0))
      return
    
    // Add student
    students.push(studentName)

    // Sort students
    students.sort()

    // Set state with new students
    this.setState({students}) 
  }

  render() {
    return (
      <React.Fragment>
        <NameForm addStudent={this.addStudent} />
        { 
          this.state.students.length > 0 ?

          <div style={{ display: 'flex' }}>
            {this.state.students.map((name, nameIndex) => (
              <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
                <Name studentName={name} deleteStudent={() => this.deleteStudent(nameIndex)} />
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

// here is the functional version of this component with no logic
// const Home = () => (
//   <React.Fragment>
//     <NameForm />
//     <div style={{ display: 'flex' }}>
//       {StudentNames.map((name, nameIndex) => (
//         <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
//           <Name studentName={name} />
//         </div>
//       ))}
//     </div>
//   </React.Fragment>
// )

// here is the functional version of this component with hooks for state
// const Home = () => {
//   const [studentNames, setStudentNames] = React.useState(['Andrew Lazenka'])
//   return (
//     <React.Fragment>
//       <NameForm />
//       <div style={{ display: 'flex' }}>
//         {studentNames.map((name, nameIndex) => (
//           <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
//             <Name studentName={name} />
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   )
// }

export default Home;
