import React from 'react';
import '../stylesheets/RedditFeed.css';

class RedditFeed extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getHandler();
  }

  static propTypes = {
    getHandler: React.PropTypes.func.isRequired,
    postList: React.PropTypes.func.isRequired
  }

  renderContent() {
    return (
      <div className='display'>
        <div className='postList'>
          {this.props.postList()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

export default RedditFeed;
