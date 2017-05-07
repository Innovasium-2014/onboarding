import React from 'react';

class AlterSubReddit extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      sameWarning: false
    };
  }

  static propTypes = {
    helpers: React.PropTypes.object.isRequired,
    values: React.PropTypes.object.isRequired
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  changeSubReddit(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    const url = 'http://www.reddit.com/r/' + inputValue + '.json';
    if (inputValue) {
      this.props.helpers.changeSubReddit(url);
      this.setState({
        inputValue: ''
      });
    }
  }

  clickToAdd() {
    const { favorites, subreddit } = this.props.values;
    var result = favorites.find((favorite) => {
      return favorite.get('name') === subreddit;
    });
    if (result) {
      this.setState({
        sameWarning: true
      });
    } else {
      this.setState({
        sameWarning: false
      });
      this.props.helpers.createFavorite(subreddit);
    }
  }

  renderContent() {
    const {
      subreddit,
      sameWarning,
      upsSortButtonText,
      authorSortButtonText
    } = this.props.values;
    const { sortByUps, sortByAuthor, handleFilter } = this.props.helpers;
    const url = 'http://www.reddit.com/r/' + subreddit;
    return (
      <div>
        <a href={url}><h2>{subreddit}</h2></a>
        <div>
          <div>
            <form onSubmit={(e) => this.changeSubReddit(e)}>
              <input
                className='form-control'
                placeholder='Change Subreddit...'
                onChange={(e) => this.handleInputChange(e)}
                value={this.state.inputValue}
              />
            </form>
          </div>
          {(sameWarning) &&
            <div>
              <h6>You have already favorited this subreddit</h6>
            </div>
          }
        </div>
        <button
          className='btn btn-success'
          onClick={() => this.clickToAdd()}
        >
          Add to Favorites
        </button>
        <button
          className='btn btn-primary'
          onClick={sortByUps}
        >
          {upsSortButtonText}
        </button>
        <button
          className='btn btn-primary'
          onClick={sortByAuthor}
        >
          {authorSortButtonText}
        </button>
        <input
          type='text'
          placeholder='Search this Subreddit...'
          onChange={(e) => handleFilter(e)}
        />
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
