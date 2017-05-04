import React from 'react';
import '../stylesheets/FavoritesList.css';

class FavoritesList extends React.Component {

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

export default FavoritesList;
