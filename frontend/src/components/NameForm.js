import React from 'react';
import '../stylesheets/NameForm.css';

class NameForm extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  static propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    addHandler: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addHandler}>
          <input
            className='form-control'
            onChange={this.props.onChange}
            placeholder="Enter your name..."
            value={this.props.value}
          />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    );
  }

}

export default NameForm;
