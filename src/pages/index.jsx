import React from 'react';

import NameForm from '../components/NameForm';
import Name from '../components/Name';
import StudentNames from '../constants/StudentNames';

// here is the class version of this component with no logic
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NameForm />
        <div style={{ display: 'flex' }}>
          {StudentNames.map((name, nameIndex) => (
            <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
              <Name studentName={name} />
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
