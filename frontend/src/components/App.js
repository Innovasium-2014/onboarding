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
      inputValue: '',
      inputError: '',
      feedData: {},
      subreddit: 'UWaterloo'
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

  addHandler(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    if (!inputValue) {
      this.setState({
        inputError: ''
      });
      return false;
    }
    this.props.addStudent(inputValue);
    this.setState({
      inputValue: '',
      inputError: ''
    });
    return false;
  }

  changeSubReddit(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    const url = 'http://www.reddit.com/r/' + inputValue + '.json';
    if (inputValue) {
      this.props.getFeed(url);
      this.setState({
        inputValue: '',
        subreddit: inputValue
      });
    }
  }

  loadFavorite(name) {
    const url = 'http://www.reddit.com/r/' + name + '.json';
    this.props.getFeed(url);
    this.setState({
      subreddit: name
    });
  }

  clickToAdd() {
    this.props.createFavorite(this.state.subreddit);
  }

  clickToRemove(id) {
    this.props.removeFavorite(id);
  }

  getHandler() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.props.getFeed(url);
    this.props.getFavorites();
  }

  favoriteList() {
    const posts = (this.props.reddits && this.props.reddits.get('favorites')) || [];
    return posts.map((post, i) => {
      const favoriteName = post.get('name');
      const favoriteId = post.get('id');
      return (
        <div key={i}>
          <div className='favoritesCard'>
            <div className='subredditName'>
              <a href='javascript:void(0)' className='dullLink' onClick={() => this.loadFavorite(favoriteName)}>{favoriteName}</a>
            </div>
            <div className='removeButton'>
              <button
                className='btn btn-danger'
                onClick={() => this.clickToRemove(favoriteId)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  postList() {
    const posts = (this.props.reddits && this.props.reddits.getIn(['feed', 'children'])) || [];
    return posts.map((post, i) => {
      const postUps = post.getIn(['data', 'ups']);
      const postUrl = post.getIn(['data', 'url']);
      const postTitle = post.getIn(['data', 'title']);
      const postThumb = post.getIn(['data', 'thumbnail']) === '' || 'self' ? 'https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300' : post.getIn(['data', 'thumbnail']);
      const postAuthor = post.getIn(['data', 'author']);
      const authorLink = 'http://www.reddit.com/user/' + postAuthor;
      return (
        <div key={i}>
          <div className='subredditCard'>
            <div className='ups'>
              {postUps}
            </div>
            <div className='thumbnailDiv'>
              <img src={postThumb} alt='thumbnail' className='thumbnailImage' />
            </div>
            <div className='title'>
              <a href={postUrl}>{postTitle}</a>
            </div>
            <div className='author'>
              <h6>Submitted by:</h6>
              <a href={authorLink}>{postAuthor}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  renderNames() {
    return this.props.students.map((student) => {
      const studentId = student.get('id');
      return (
        <div key={studentId}>
          <Name
            name={student.get('name')}
            studentId={studentId}
            deleteHandler={this.deleteHandler}
          />
        </div>
      );
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <AlterSubReddit
          inputValue={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e)}
          onSubmit={(e) => this.changeSubReddit(e)}
          clickToAdd={() => this.clickToAdd()}
          createFavorite={(e) => this.props.createFavorite(e)}
          subreddit={this.state.subreddit}
        />
        <div className="display">
          <RedditFeed
            getHandler={() => this.getHandler()}
            postList={() => this.postList()}
          />
          <FavoritesList
            favoriteList={() => this.favoriteList()}
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
