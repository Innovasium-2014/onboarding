import React from 'react';
import '../stylesheets/NameForm.css';

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  static propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    addHandler: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <form onSubmit={this.props.addHandler}>
        <input
          placeholder='Enter your name'
          className='form-control'
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default NameForm;
