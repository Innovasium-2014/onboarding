import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'
import './NameForm.css'

const NameForm = ({ onClick, errorMessage }) => {
  const [textboxValue, setTextboxValue] = React.useState('')
  const textChange = (event) => {
    setTextboxValue(event.target.value)
  }

  const handleClick = () => {
    if (onClick(textboxValue)) setTextboxValue('')
  }

  return (
    <div>
      <h1>Student Names</h1>
      <div style={{ display: 'flex' }}>
        <TextField
          className="form-control"
          placeholder="Enter a student's name here"
          onChange={textChange}
          value={textboxValue}
        />
        <Button onClick={handleClick}>Add Name</Button>
      </div>
      <br />
      <div className="errorText">{errorMessage}</div>
    </div>
  )
}

NameForm.propTypes = {
  handleClick: PropTypes.func,
  errorMessage: PropTypes.string,
}

export default NameForm
