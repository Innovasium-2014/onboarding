import React from 'react';
// import cx from 'classnames';
import $ from 'jquery';
// import Immutable from 'immutable';
// import Select from 'react-select';
// import Icon from '../Icon';

class RedditFeed extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      subreddit: 'UWaterloo'
    };
  }

  componentWillMount() {
    this.props.getHandler();
  }

  static propTypes = {
    getHandler: React.PropTypes.func.isRequired
  }

  postList() {
    const posts = this.state.posts;
    // console.log(posts);
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

  renderContent() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit;
    return (
      <div>
        <a href={url}>{ this.state.subreddit }</a>
        {this.postList()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h6>Hello Friends</h6>
        { this.renderContent() }
      </div>
    );
  }
}

export default RedditFeed;
