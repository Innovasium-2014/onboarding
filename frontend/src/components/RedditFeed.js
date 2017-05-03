import React from 'react';
// import cx from 'classnames';
import $ from 'jquery';
import Immutable from 'immutable';
import { getPosts } from '../actions/RedditActions';
// import Select from 'react-select';
// import Icon from '../Icon';

class RedditFeed extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        subreddit: 'uwaterloo',
        posts: this.props.value
      };
    }

  static propTypes = {
    getHandler: React.PropTypes.func.isRequired
  }
  getInitialState() {
    // return {
    //   subreddit: 'UWaterloo',
    //   posts: []
    // };
  }

  createFeed(){
    this.setState({
      posts: subredditFeed
    })
    console.log(subredditFeed);
  }

  componentWillMount() {
    this.props.getHandler();
  }

  _postList() {
    const posts = this.state.posts;
    console.log(posts);
    return posts.map((post, i) => {
      return (
        <div key={i}>
          <span>
            <a href={post.data.url}>{post.data.title}</a>
          </span>
        </div>
      );
    });
  }

  _renderContent() {
    const url = 'http://www.reddit.com/r/uwaterloo';
    return (
      <div>
        <a href={url}>Uwaterloo</a>
        {this._postList()}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this._renderContent() }
        Hey
      </div>
    );
  }
}

export default RedditFeed;
