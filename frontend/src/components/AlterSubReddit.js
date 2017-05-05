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
    sortByAuthor: React.PropTypes.func.isRequired,
    upsSortButtonText: React.PropTypes.string.isRequired,
    authorSortButtonText: React.PropTypes.string.isRequired
  }

  renderContent() {
    const url = 'http://www.reddit.com/r/' + this.props.subreddit;
    return (
      <div>
        <a href={url}><h2>{this.props.subreddit}</h2></a>
        <div>
          <div>
            <form onSubmit={this.props.onSubmit}>
              <input
                className='form-control'
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
          onClick={this.props.clickToAdd}
        >
          Add to Favorites
        </button>
        <button
          className='btn btn-primary'
          onClick={this.props.sortByUps}
        >
          {this.props.upsSortButtonText}
        </button>
        <button
          className='btn btn-primary'
          onClick={this.props.sortByAuthor}
        >
          {this.props.authorSortButtonText}
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
