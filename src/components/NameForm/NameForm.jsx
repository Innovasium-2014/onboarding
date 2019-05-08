import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './NameForm.css';

const NameForm = (props) => {

  const [name, setName] = React.useState('');

  const handleChange = event => setName(event.target.value);
  const onClick = event => props.onClick(name);

  return (
    <div>
      <h1>Student Names</h1>
      <div style={{ display: 'flex' }}>
        <TextField value={name} onChange={handleChange}
          className="form-control"
          placeholder="Enter a student's name here"
        />
        <Button onClick={onClick}>Add Name</Button>
      </div>
    </div>
  );
};

export default NameForm;
