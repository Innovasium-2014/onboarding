import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './NameForm.css';

const NameForm = () => {
  return (
    <div>
      <h1>Student Names</h1>
      <div style={{ display: 'flex' }}>
        <TextField
          className="form-control"
          placeholder="Enter a student's name here"
        />
        <Button>Add Name</Button>
      </div>
    </div>
  );
};

export default NameForm;
