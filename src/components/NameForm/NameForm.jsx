import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './NameForm.css';

const NameForm = ({ addStudent }) => {
  const [studentName, setStudentName] = React.useState('')

  function submitName() {
    addStudent(studentName)
    setStudentName('')
  }

  return (
    <div>
      <h1>Student Names</h1>
      <div style={{ display: 'flex' }}>
        <TextField
          className="form-control"
          placeholder="Enter a student's name here"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
        />
        <Button
          onClick={() => submitName()}
        >
          Add Name
        </Button>
      </div>
    </div>
  );
};

export default NameForm;
