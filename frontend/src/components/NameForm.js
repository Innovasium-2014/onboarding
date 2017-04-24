import React from 'react';
import '../stylesheets/NameForm.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputError: false
    };
  }

  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  }

  handleSubmit(e) {
    const { inputValue } = this.state;
    e.preventDefault();
    if (!inputValue) {
      this.setState({
        inputError: true
      });
    } else {
      this.props.onSubmit(inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
      inputError: false
    });
  }

  render() {
    return (
      <form
        className='row inputForm'
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <h4>Add a new student </h4>
        <div className='col-md-4 col-md-offset-4'>
          <input
            className='form-control'
            value={this.state.inputValue}
            onChange={(e) => this.onInputChange(e)}
          />
          {this.state.inputError ?
            <font className='errorText'>Name must not be empty</font> : null
          }
        </div>
      </form>
    );
  }
}

export default NameForm;
