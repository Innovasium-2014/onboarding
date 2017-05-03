import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import RedditFeed from './RedditFeed';
import { addStudent } from '../actions/StudentActions';
import { getPosts } from '../actions/RedditActions';

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

  static propTypes = {
    students: instanceOf(Immutable.list),
    reddits: instanceOf(Immutable.list),
    addStudent: func.isRequired,
    getPosts: func.isRequired
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

  deleteHandler(e) {

  }

  _renderNames() {
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

  getHandler(){
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.props.getPosts(url);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <NameForm
        value={this.state.inputValue}
        onChange={(e) => handleInputChange(e)}
        addHandler={(e) => this.addHandler(e)}
        />
        <RedditFeed
        getHandler={() => this.getHandler()}
        value={this.state}
        />
        { this._renderNames }
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
  getPosts
};

export default connect(mapStateToProps, actionCreators)(App);
