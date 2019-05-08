import React from 'react';
import './SocialCard.css';
import Button from './Button'

class Card extends React.Component {
  constructor(props) {
    super(props)

    const { comments, shares, favorites, body } = props

    this.state = {
      comments,
      shares,
      favorites,
      body,
      editing: false
    }

    this.clickComment = this.clickComment.bind(this)
    this.clickShare  = this.clickShare.bind(this)
    this.clickFavorite = this.clickFavorite.bind(this)
    this.clickEdit = this.clickEdit.bind(this)
    this.changeTweet = this.changeTweet.bind(this)
  }

  buttonState(toggle) {
    return (toggle ? 1 : -1)
  }

  clickComment(toggle) {
    this.setState({
      comments: this.state.comments + this.buttonState(toggle)
    })
  }

  clickShare(toggle) {
    this.setState({
      shares: this.state.shares + this.buttonState(toggle)
    })
  }

  clickFavorite(toggle) {
    this.setState({
      favorites: this.state.favorites + this.buttonState(toggle)
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
    const { accountName, accountHandle, image, date } = this.props
    const { body, comments, shares, favorites, editing } = this.state

    return (
      <div className='tweet'>

        <div  className = 'tweet-top-right' >
          <Button icon = 'edit' value = '' callback = { () => this.clickEdit() }/>
        </div>

        <h1> { accountName } </h1>
        <h2> { accountHandle } </h2>

        { 
          image &&
          <img alt = 'Tweet ahah!' src= { image } />
        }
        
        { 
          editing ?
          <textarea 
            rows="4" 
            columns="8"
            onChange={e => this.changeTweet(e)}
          >
            { body }
          </textarea>
          :
          <p>{ body }</p>
        }

        <p className = 'tweet-date'>
          { 
            date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() 
          }
        </p>

        <Button icon = 'comment' value = { comments }  callback = { this.clickComment }/>
        <Button icon = 'retweet' value = { shares }    callback = { this.clickShare }/>
        <Button icon = 'heart'   value = { favorites } callback = { this.clickFavorite }/>

        <div className='tweet-button-bottom' />
      </div>
    )
  }
}

export default Card;
