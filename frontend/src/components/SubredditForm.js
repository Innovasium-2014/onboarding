import React from 'react';
import '../stylesheets/NameForm.css';

class SubredditForm extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  static propTypes = {
    subreddit: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            className='form-control'
            onChange={this.props.onChange}
            placeholder="Enter your subreddit..."
            value={this.props.inputValue}
          />
          <button className='btn btn-success'>Find Subreddit!</button>
        </form>
      </div>
    );
  }

}

export default SubredditForm;
