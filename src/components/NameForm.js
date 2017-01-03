import React from 'react';
import '../stylesheets/NameForm.css';

const NameForm = React.createClass({
  propTypes: {
  },

  getInitialState() {
    return {
    };
  },

  render() {
    return (
      <form
      className='row inputForm'
      onSubmit={this.handleSubmit}>
        <h4>
          Add a new student
        </h4>
        <div className='col-md-4 col-md-offset-4'>
          <input
          className='form-control'
          value={this.state.inputValue}
          onChange={this.onInputChange}/>
          {this.state.inputError ?
            <font className='errorText'>Name must not be empty</font> : null
          }
        </div>
      </form>
    );
  }
});

export default NameForm;
