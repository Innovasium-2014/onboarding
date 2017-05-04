import React from 'react';

class AlterSubReddit extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  static propTypes = {
    subreddit: React.PropTypes.string.isRequired,
    inputValue: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    clickToAdd: React.PropTypes.func.isRequired
  }

  renderContent() {
    const url = 'http://www.reddit.com/r/' + this.props.subreddit;
    return (
      <div>
        <a href={url}><h2>{this.props.subreddit}</h2></a>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder='Change Subreddit...'
            onChange={this.props.onChange}
            value={this.props.inputValue}
          />
        </form>
        <button
          className='btn btn-success'
          onClick={this.props.clickToAdd}
        >
          Add to Favorites
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

export default AlterSubReddit;
