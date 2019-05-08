import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './NameForm.css';

const NameForm = ({onClick}) => {

  const [name, setName] = React.useState('');

  const handleChange = event => setName(event.target.value);
  const addName = event => onClick(name);

  return (
    <div>
      <h1>Student Names</h1>
      <div style={{ display: 'flex' }}>
        <TextField value={name} onChange={handleChange}
          className="form-control"
          placeholder="Enter a student's name here"
        />
        <Button onClick={addName}>Add Name</Button>
      </div>
    </div>
  );
};

export default NameForm;
