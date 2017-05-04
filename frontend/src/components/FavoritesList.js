import React from 'react';
import '../stylesheets/FavoritesList.css';

class FavoritesList extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  static propTypes = {
    favoriteList: React.PropTypes.func.isRequired
  }

  renderContent() {
    return (
      <div className='favoritesList'>
        {this.props.favoriteList()}
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
