import React from 'react';
import Immutable from 'immutable';
import '../stylesheets/FavoritesList.css';

const { instanceOf, string, func } = React.PropTypes;

class FavoritesList extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  static propTypes = {
    subreddit: string.isRequired,
    removeFavorite: func.isRequired,
    changeSubReddit: func.isRequired,
    favorites: instanceOf(Immutable.list)
  }

  clickToRemove(id) {
    this.props.removeFavorite(id);
  }

  loadFavorite(name) {
    const url = 'http://www.reddit.com/r/' + name + '.json';
    this.props.changeSubReddit(url);
  }

  renderContent() {
    const posts = this.props.favorites || [];
    return posts.map((post, i) => {
      const favoriteName = post.get('name');
      const favoriteId = post.get('id');
      return (
        <div key={i}>
          <div className='favoritesCard'>
            <div className='subredditName'>
              {!(this.props.subreddit === favoriteName) &&
                <a
                  href='javascript:void(0)'
                  className='dullLink'
                  onClick={() => this.loadFavorite(favoriteName)}
                >
                  {favoriteName}
                </a>
              }
              {(this.props.subreddit === favoriteName) &&
                <p className='browsing'>
                  {favoriteName}
                </p>
              }
            </div>
            <div className='removeButton'>
              <button
                className='btn btn-danger'
                onClick={() => this.clickToRemove(favoriteId)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='favoritesList'>
        { this.renderContent() }
      </div>
    );
  }
}

export default FavoritesList;
