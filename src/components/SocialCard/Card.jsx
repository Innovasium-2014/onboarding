import React from 'react';
import './SocialCard.css';
import Button from './Button'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: this.props.comments,
      shares: this.props.shares,
      favorites: this.props.favorites,
      editing: false,
      body: this.props.body
    }

    this.clickComment = this.clickComment.bind(this)
    this.clickShare  = this.clickShare.bind(this)
    this.clickFavorite = this.clickFavorite.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.changeTweet = this.changeTweet.bind(this)
  }

  clickComment(toggle) {
    this.setState({
      comments: parseInt(this.state.comments) + (toggle ? 1 : -1)
    })
  }

  clickShare(toggle) {
    this.setState({
      shares: parseInt(this.state.shares) + (toggle ? 1 : -1)
    })
  }

  clickFavorite(toggle) {
    this.setState({
      favorites: parseInt(this.state.favorites) + (toggle ? 1 : -1)
    })
  }

  clickEdit(toggle) {
    this.setState({
      editing: !this.state.editing
    })
  }

  changeTweet(event) {
    this.setState({
      body: event.target.value
    })
  }

  render() {
    return (
      <div className='tweet'>

        <div  className = 'tweet-top-right' >
          <Button icon = 'edit' value = '' callback = { () => this.clickEdit() }/>
        </div>

        <h1>
          { this.props.accountName }
        </h1>
        <h2>
          { this.props.accountHandle }
        </h2>

        { 
          this.props.image &&
          <img alt = 'Tweet ahah!' src= { this.props.image } />
        }

        
        { 
          this.state.editing ?
          <textarea 
            rows="4" 
            columns="8"
            onChange={e => this.changeTweet(e)}
          >
            {this.state.body}
          </textarea>
          :
          <p>{this.state.body}</p>
        }

        <p className = 'tweet-date'>
          { this.props.date }
        </p>

        <Button icon = 'comment' value = { this.state.comments }  callback = { this.clickComment }/>
        <Button icon = 'retweet' value = { this.state.shares }    callback = { this.clickShare }/>
        <Button icon = 'heart'   value = { this.state.favorites } callback = { this.clickFavorite }/>

        <div className='tweet-button-bottom' />

      </div>
    )
  }
}

export default Card;
