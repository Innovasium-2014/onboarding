import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import '../stylesheets/RedditFeed.css';
import '../stylesheets/FavoritesList.css';
import UniFeed from './UniFeed';
import AlterCourse from './AlterCourse';
import FilterBox from './FilterBox';
import { getCourses } from '../actions/UniActions';

const { func, instanceOf, string } = React.PropTypes;

class Uni extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '/CS',
      inputError: '',
      command: '/CS',
      apiKey: '?key=faca98055f32de96a5a0cf931efd5bf3',
      feeds: Immutable.fromJS({})
    };
  }

  static propTypes = {
    unis: instanceOf(Immutable.list),
    getCourses: func.isRequired,
    inputValue: string
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.unis.get('feed')) {
      this.setState({
        feeds: nextProps.unis
      });
    }
  }

  changeCommand(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    const url = 'https://api.uwaterloo.ca/v2/courses' + inputValue + '.json' + this.state.apiKey;
    if (inputValue) {
      this.props.getCourses(url);
      this.setState({
        inputValue: '',
        command: inputValue
      });
    }
  }

  getHandler() {
    const url = 'https://api.uwaterloo.ca/v2/courses' + this.state.command + '.json' + this.state.apiKey;
    this.props.getCourses(url);
  }

  postList() {
    const posts = (this.state.feeds && this.state.feeds) || [];
    let a = 0;
    return posts.map((post, i) => {
      return post.map((info, j) => {
        console.log(post);
        console.log(a);
        return (
          <div key={j}>
            <div className='subredditCard'>
              <div className='courseslol'>
                {info.get('title')}
              </div>
              <br />
              <div className='coursecodeslol'>
                {info.get('subject')}
                {' ' + info.get('catalog_number')}
              </div>
            </div>
          </div>
        );
      });
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
        <AlterCourse
          inputValue={this.state.inputValue}
          onChange={(e) => this.handleInputChange(e)}
          onSubmit={(e) => this.changeCommand(e)}
          course={this.state.command}
          apiKey={this.state.apiKey}
        />
        <FilterBox
        />
        <div className="display">
          <UniFeed
            getHandler={() => this.getHandler()}
            postList={() => this.postList()}
          />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    unis: state.unis
  };
}

const actionCreators = {
  getCourses
};

export default connect(mapStateToProps, actionCreators)(Uni);
