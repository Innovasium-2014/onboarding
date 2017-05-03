import React from 'react';

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
      <div>
        {this.props.postList()}
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
