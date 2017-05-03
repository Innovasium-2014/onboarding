import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import RedditFeed from './RedditFeed';
import Name from './Name';
import NameForm from './NameForm';
import { addStudent } from '../actions/StudentActions';
import { getFeed } from '../actions/RedditActions';

const { func, instanceOf } = React.PropTypes;

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

  getHandler() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
    this.setState({
      feedData: this.props.getFeed(url)
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
        <h1>My App</h1>
        <NameForm
          value={this.state.inputValue}
          onChange={(e) => handleInputChange(e)}
          addHandler={(e) => this.addHandler(e)}
        />
        { this.renderNames }
        <RedditFeed
          getHandler={() => this.getHandler()}
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
