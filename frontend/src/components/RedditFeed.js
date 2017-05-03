import React from 'react';
// import cx from 'classnames';
import $ from 'jquery';
import Immutable from 'immutable';
import { getPosts } from '../actions/RedditActions';
// import Select from 'react-select';
// import Icon from '../Icon';

class RedditFeed extends React.Component {

  static propTypes = {
    getHandler: React.PropTypes.func.isRequired,
    _postList: React.PropTypes.func.isRequired
  }

  createFeed(){
    this.setState({
      posts: subredditFeed
    })
    //console.log(subredditFeed);
  }

  componentWillMount() {
    this.props.getHandler();
  }

  _renderContent() {
    const url = 'http://www.reddit.com/r/uwaterloo';
    return (
      <div>
      <center>
        <h2><a href={url}>{this.props.subreddit}</a></h2>
        </center>
        {this.props._postList()}
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
