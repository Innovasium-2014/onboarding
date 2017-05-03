import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import RedditFeed from './RedditFeed';
import Name from './Name';
// import NameForm from './NameForm';
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
    getFeed: func.isRequired
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
    this.setState({ inputValue: '', inputError: '' });
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
    this.setState({
      feedData: this.props.getFeed(url)
    });
  }

  postList() {
    const posts = (this.props.reddits && this.props.reddits.get('children')) || [];
    return posts.map((post, i) => {
      return (
        <div key={i}>
          <span>
            <a href={post.get('data').get('url')}>{post.get('data').get('title')}</a>
          </span>
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
