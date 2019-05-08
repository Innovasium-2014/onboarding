import React from 'react';

import NameForm from '../components/NameForm';
import Name from '../components/Name';
import StudentNames from '../constants/StudentNames';

// here is the class version of this component with no logic
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      studentNames: StudentNames
    };
  }

  addName = (newName) => {
    this.setState ({
      studentNames: this.state.studentNames.concat(newName)
    })
    console.log(this.state.studentNames);
  }

  deletFunc = (nameIndex) => {
    console.log(nameIndex)
    let {studentNames} = this.state
    console.log(studentNames)
    studentNames.splice(nameIndex, 1)
    this.setState ({
      studentNames
    })
    console.log(this.state.studentNames)
  }

  render() {
    return (
      <React.Fragment>
        <NameForm onClick={this.addName}/>
        <div style={{ display: 'flex' }}>
          {this.state.studentNames.map((name, nameIndex) => (
            <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
              <Name studentName={name} deleteFunc={() => this.deletFunc(nameIndex)}/>
            </div>
          ))}
        </div>
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
