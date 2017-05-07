import React from 'react';
import Immutable from 'immutable';
import '../stylesheets/RedditFeed.css';

const { instanceOf } = React.PropTypes;

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
    posts: instanceOf(Immutable.list)
  }

  renderContent() {
    const posts = (this.props.posts && this.props.posts) || [];
    return posts.map((post, i) => {
      const postUps = post.getIn(['data', 'ups']);
      const postUrl = post.getIn(['data', 'url']);
      const postTitle = post.getIn(['data', 'title']);
      const postThumb = post.getIn(['data', 'thumbnail']).includes('jpg') ? post.getIn(['data', 'thumbnail']) : 'https://lh3.googleusercontent.com/J41hsV2swVteoeB8pDhqbQR3H83NrEBFv2q_kYdq1xp9vsI1Gz9A9pzjcwX_JrZpPGsa=w300';
      const postAuthor = post.getIn(['data', 'author']);
      const authorLink = 'http://www.reddit.com/user/' + postAuthor;
      return (
        <div key={i}>
          <div className='subredditCard'>
            <div className='ups'>
              {postUps}
            </div>
            <div className='thumbnailDiv'>
              <img src={postThumb} alt='thumbnail' className='thumbnailImage' />
            </div>
            <div className='title'>
              <a href={postUrl}>{postTitle}</a>
            </div>
            <div className='author'>
              <h6>Submitted by:</h6>
              <a href={authorLink}>{postAuthor}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='postList'>
        { this.renderContent() }
      </div>
    );
  }
}

export default RedditFeed;
