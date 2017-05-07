import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import '../stylesheets/RedditFeed.css';
import '../stylesheets/FavoritesList.css';
import RedditFeed from './RedditFeed';
import FavoritesList from './FavoritesList';
import AlterSubReddit from './AlterSubReddit';
import { addStudent } from '../actions/StudentActions';
import { getFeed, getFavorites, createFavorite, removeFavorite } from '../actions/RedditActions';

const { func, instanceOf, string } = React.PropTypes;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sort: 0,
      subreddit: 'uwaterloo',
      upsSortButtonText: 'Upvotes - Ascending',
      authorSortButtonText: 'Author - Ascending',
      feeds: Immutable.fromJS({}),
      filterList: Immutable.fromJS({}),
      favorites: Immutable.fromJS({}),
      filterFavorites: Immutable.fromJS({})
    };
  }

  static propTypes = {
    students: instanceOf(Immutable.list),
    reddits: instanceOf(Immutable.list),
    addStudent: func.isRequired,
    getFeed: func.isRequired,
    getFavorites: func.isRequired,
    createFavorite: func.isRequired,
    removeFavorite: func.isRequired,
    inputValue: string
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reddits.get('feed').get('children')) {
      this.setState({
        feeds: nextProps.reddits.get('feed').get('children'),
        filterList: nextProps.reddits.get('feed').get('children'),
        subreddit: nextProps.reddits.getIn(['feed', 'children', 0, 'data', 'subreddit'])
      });
    }
    if (nextProps.reddits.get('favorites')) {
      this.setState({
        favorites: nextProps.reddits.get('favorites'),
        filterFavorites: nextProps.reddits.get('favorites')
      });
    }
  }

  getHandler() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.props.getFeed(url);
    this.props.getFavorites();
  }

  sortByUps() {
    const feed = this.state.feeds;
    let sortedState;
    let newSortState;
    let newButtonText;
    if (this.state.sort > 0) {
      sortedState = feed.sort((a, b) => {
        const first = a.getIn(['data', 'ups']);
        const second = b.getIn(['data', 'ups']);
        if (first < second) { return -1; }
        if (first > second) { return 1; }
        if (first === second) { return 0; }
      });
      newSortState = -1;
      newButtonText = 'Upvotes - Default';
    } else if (this.state.sort < 0) {
      sortedState = this.props.reddits.get('feed').get('children');
      newSortState = 0;
      newButtonText = 'Upvotes - Ascending';
    } else {
      sortedState = feed.sort((a, b) => {
        const first = a.getIn(['data', 'ups']);
        const second = b.getIn(['data', 'ups']);
        if (first < second) { return 1; }
        if (first > second) { return -1; }
        if (first === second) { return 0; }
      });
      newSortState = 1;
      newButtonText = 'Upvotes - Descending';
    }
    this.setState({
      feeds: sortedState,
      sort: newSortState,
      upsSortButtonText: newButtonText
    });
  }

  sortByAuthor() {
    const feed = this.state.feeds;
    let sortedState;
    let newSortState;
    let newButtonText;
    if (this.state.sort > 0) {
      sortedState = feed.sort((a, b) => {
        const first = a.getIn(['data', 'author']);
        const second = b.getIn(['data', 'author']);
        return second.localeCompare(first);
      });
      newSortState = -1;
      newButtonText = 'Author - Default';
    } else if (this.state.sort < 0) {
      sortedState = this.props.reddits.get('feed').get('children');
      newSortState = 0;
      newButtonText = 'Author - Ascending';
    } else {
      sortedState = feed.sort((a, b) => {
        const first = a.getIn(['data', 'author']);
        const second = b.getIn(['data', 'author']);
        return first.localeCompare(second);
      });
      newSortState = 1;
      newButtonText = 'Author - Descending';
    }
    this.setState({
      feeds: sortedState,
      sort: newSortState,
      authorSortButtonText: newButtonText
    });
  }

  changeSubReddit(url) {
    this.props.getFeed(url);
    this.setState({
      subreddit: this.state.feeds.getIn([1, 'data', 'subreddit'])
    });
  }

  handleFilter(e) {
    this.setState({
      filterInputValue: e.target.value,
      feeds: this.state.filterList.filter((curr) => {
        return curr.getIn(['data', 'title']).toLowerCase().includes(e.target.value.toLowerCase());
      }),
      favorites: this.state.filterFavorites.filter((curr) => {
        return curr.get('name').toLowerCase().includes(e.target.value.toLowerCase());
      })
    });
  }

  render() {
    const values = {
      feeds: this.state.feeds,
      reddits: this.props.reddits,
      subreddit: this.state.subreddit,
      upsSortButtonText: this.state.upsSortButtonText,
      authorSortButtonText: this.state.authorSortButtonText,
      favorites: this.state.favorites
    };
    const helpers = {
      changeSubReddit: (e) => this.changeSubReddit(e),
      clickToAdd: () => this.clickToAdd(),
      createFavorite: (e) => this.props.createFavorite(e),
      sortByUps: () => this.sortByUps(),
      sortByAuthor: () => this.sortByAuthor(),
      handleFilter: (e) => this.handleFilter(e)
    };
    return (
      <div>
        <AlterSubReddit
          values={values}
          helpers={helpers}
        />
        <div className="display">
          <RedditFeed
            getHandler={() => this.getHandler()}
            posts={this.state.feeds}
          />
          <FavoritesList
            favorites={this.state.favorites}
            subreddit={this.state.subreddit}
            changeSubReddit={(e) => this.changeSubReddit(e)}
            removeFavorite={(e) => this.props.removeFavorite(e)}
          />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    students: state.students,
    reddits: state.reddits
  };
}

const actionCreators = {
  addStudent,
  getFeed,
  getFavorites,
  createFavorite,
  removeFavorite
};

export default connect(mapStateToProps, actionCreators)(App);
