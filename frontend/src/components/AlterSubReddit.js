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
    clickToAdd: React.PropTypes.func.isRequired,
    sameWarning: React.PropTypes.bool.isRequired,
    sortByUps: React.PropTypes.func.isRequired,
    buttonText: React.PropTypes.string.isRequired,
    buttonTextA: React.PropTypes.string.isRequired
  }

  renderContent() {
    const url = 'http://www.reddit.com/r/' + this.props.subreddit;
    return (
      <div>
      <center>
        <a href={url}><h2>{this.props.subreddit}</h2></a>
        <div>
          <div>
            <form onSubmit={this.props.onSubmit}>
              <input
                placeholder='Change Subreddit...'
                onChange={this.props.onChange}
                value={this.props.inputValue}
              />
            </form>
          </div>
          {(this.props.sameWarning) &&
            <div>
              <h6>You have already favorited this subreddit</h6>
            </div>
          }
        </div>
        <button
          className='btn btn-success'
          style={{width: 170 + 'px'}}
          onClick={this.props.clickToAdd}
        >
          Add to Favorites
        </button>
        <br />
        <button
          className='btn btn-primary'
          style={{width: 170 + 'px'}}
          onClick={this.props.sortByUps}
        >
          {this.props.buttonText}
        </button>
        <br />
        <button
          className='btn btn-info'
          style={{width: 170 + 'px'}}
          onClick={this.props.sortByAuthor}
        >
          {this.props.buttonTextA}
        </button>
        <br />
        </center>
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
