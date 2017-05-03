import React from 'react';
// import cx from 'classnames';
import $ from 'jquery';
import Immutable from 'immutable';
// import Select from 'react-select';
// import Icon from '../Icon';
import{ getFeed } from '../actions/StudentActions.js';



const RedditFeed = React.createClass({

  getInitialState() {
    return {
      subreddit: 'UWaterloo',
      posts: []
    };
  },

  componentWillMount() {
    this.props.getHandler();
  },

  _postList() {
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
  },

  _renderContent() {
    const url = 'http://www.reddit.com/r/' + this.state.subreddit;
    return (
      <div>
        <a href={url}>{ this.state.subreddit }</a>
        {this._postList()}
      </div>
    );
  },

  render() {
    return (
      <div>
        { this._renderContent() }
      </div>
    );
  }
});

export default RedditFeed;
