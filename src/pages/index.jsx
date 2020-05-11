import React from 'react'

import NameForm from '../components/NameForm'
import Name from '../components/Name'

//here is the functional version of this component with hooks for state
const Home = () => {
  const [studentNames, setStudentNames] = React.useState(['Andrew Lazenka'])
  const [errorMessage, setErrorMessage] = React.useState('')
  const addStudent = (newStudentName) => {
    if (newStudentName) {
      if (!studentNames.includes(newStudentName)) {
        setStudentNames([...studentNames, newStudentName].sort())
        setErrorMessage('')
        return true
      } else {
        setErrorMessage('Entry already exists.')
      }
    } else {
      setErrorMessage('Entry is empty.')
    }
    return false
  }
  const removeStudent = (studentIndex) => {
    const newArr = [...studentNames]
    newArr.splice(studentIndex, 1)
    newArr.sort()
    setStudentNames(newArr)
    setErrorMessage('')
  }
  return (
    <React.Fragment>
      <NameForm onClick={addStudent} errorMessage={errorMessage} />
      <div style={{ display: 'flex' }}>
        {studentNames.map((name, nameIndex) => (
          <div style={{ padding: 16 }} key={`student-name-${nameIndex}`}>
            <Name
              studentName={name}
              studentIndex={nameIndex}
              onClick={removeStudent}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Home
