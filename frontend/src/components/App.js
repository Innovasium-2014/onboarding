import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import RedditFeed from './RedditFeed';
import SubredditForm from './SubredditForm';
import { addStudent } from '../actions/StudentActions';
import { getPosts } from '../actions/RedditActions';
import { addSubreddit } from '../actions/SubredditActions';

const { func, instanceOf } = React.PropTypes;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputError: '',
      subreddit: 'uwaterloo',
      posts: []
    };
  }

  detDefaultProps() {
    return{
      subreddit: 'uwaterloo'
    };
  }

  static propTypes = {
    students: instanceOf(Immutable.list),
    reddits: instanceOf(Immutable.list),
    subreddits: instanceOf(Immutable.list),
    addStudent: func.isRequired,
    getPosts: func.isRequired,
    addSubreddit: func.isRequired
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
    //console.log(this.props);
    this.props.addSubreddit(inputValue);
    //console.log(this.state.subreddits);
    this.setState({
      subreddit: this.state.subreddits
    })
    this.setState({ inputValue: '', inputError: '' });
    return false;
  }

  sortSub(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    console.log(inputValue);
    const url = 'http://www.reddit.com/r/' + inputValue + '/top/.json';
    if (inputValue) {
      this.props.getPosts(url);
      this.setState({
        subreddit: inputValue,
        inputValue: ''
      });
    }
  }

  changeSub(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    console.log(inputValue);
    const url = 'http://www.reddit.com/r/' + inputValue + '.json';
    if (inputValue) {
      this.props.getPosts(url);
      this.setState({
        subreddit: inputValue,
        inputValue: ''
      });
    }
  }

  _renderNames() {
    return this.props.students.map((student) => {
      const studentId = student.get('id');
      return (
        <div key={studentId}>
        </div>
      );
    });
  }

  _postList() {
    const posts = (this.props.reddits && this.props.reddits.get('children')) || [];
    //console.log('My posts: ' + posts);
    return posts.map((post, i) => {
      const cur_post = post.get('data');
      return (
        <div key={i} className="redditPost">
          <span>
            <h4><a href={cur_post.get('url')}>{cur_post.get('title')} </a></h4>
            Up Votes: {cur_post.get('ups')}
            <br /><br /><p>{cur_post.get('selftext')}</p>
          </span>
        </div>
      );
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  getHandler(){
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.props.getPosts(url);
  }

  render() {
    return (
      <div>
        <h1>Redditer</h1>
        <SubredditForm
        onSubmit={(e) => this.changeSub(e)}
        onChange={(e) => this.handleInputChange(e)}
        subreddit={this.state.subreddit}
        inputValue={this.state.inputValue}
        />
        <RedditFeed
        getHandler={() => this.getHandler()}
        _postList={() => this._postList()}
        value={this.state}
        subreddit={this.state.subreddit}
        />
        { this._renderNames }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    students: state.students,
    reddits: state.reddits,
    subreddits: state.subreddits
  };
}

const actionCreators = {
  addStudent,
  addSubreddit,
  getPosts
};

export default connect(mapStateToProps, actionCreators)(App);
