import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import '../stylesheets/RedditFeed.css';
import RedditFeed from './RedditFeed';
import AlterSubReddit from './AlterSubReddit';
import { addStudent } from '../actions/StudentActions';
import { getFeed } from '../actions/RedditActions';

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

  getHandler() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.props.getFeed(url);
  }

  postList() {
    const posts = (this.props.reddits && this.props.reddits.get('children')) || [];
    return posts.map((post, i) => {
      const postUps = post.get('data').get('ups');
      const postUrl = post.get('data').get('url');
      const postTitle = post.get('data').get('title');
      const postThumb = (post.get('data').get('thumbnail') && post.get('data').get('thumbnail')) ||
      'https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300';
      const postAuthor = post.get('data').get('author');
      const authorLink = 'http://www.reddit.com/user/' + postAuthor;
      return (
        <div key={i}>
          <div className='card'>
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
          subreddit={this.state.subreddit}
        />
        <RedditFeed
          getHandler={() => this.getHandler()}
          postList={() => this.postList()}
        />
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
  getFeed
};

export default connect(mapStateToProps, actionCreators)(App);
