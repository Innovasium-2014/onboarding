import React from 'react'
import './SocialCard.css'
import PropTypes from 'prop-types'
import { Card, Button } from '@material-ui/core'

export const BodyTextfield = ({ postBody, editMode, onChange }) => {
  return editMode ? (
    <textarea onChange={onChange} rows="4" cols="75">
      {postBody}
    </textarea>
  ) : (
    <div>{postBody}</div>
  )
}
BodyTextfield.propTypes = {
  postBody: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onChange: PropTypes.func,
}

export const SocialButton = ({ children, onClick, icon }) => {
  const [status, setStatus] = React.useState(false)
  function handleClick() {
    onClick(status)
    setStatus(!status)
  }

  return (
    <Button onClick={handleClick}>
      <span
        className={status ? 'social-button-pressed' : 'social-button-unpressed'}
      >
        {icon}
      </span>
      {children}
    </Button>
  )
}
SocialButton.propTypes = {
  bodyText: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
}
export const SocialCard = ({
  accountName,
  accountHandle,
  datePosted,
  postBody,
  postImageURL,
  numComments,
  numShares,
  numFavourites,
}) => {
  function findDateDifference(date) {
    const d = new Date()
    const millisec = d.getTime() - date.getTime()
    let minutes = Math.floor(millisec / (1000 * 60))
    let hours = Math.floor(millisec / (1000 * 60 * 60))
    const days = Math.floor(millisec / (1000 * 60 * 60 * 24))
    minutes = minutes - hours * 60
    hours = hours - days * 24

    let result = '  -  posted'
    if (days > 0) {
      result += ' ' + String(days) + ' day'
      if (days > 1) result += 's'
    }
    if (hours > 0 && days < 4) {
      result += ' ' + String(hours) + ' hour'
      if (hours > 1) result += 's'
    }

    if (days === 0 && minutes > 0) {
      result += ' ' + String(minutes) + ' minute'
      if (minutes > 1) result += 's'
    }

    return (result += ' ago.')
  }
  const [textbox, setTextbox] = React.useState(postBody)
  const [commentCount, setCommentCount] = React.useState(numComments)
  const [shareCount, setShareCount] = React.useState(numShares)
  const [favouriteCount, setFavouriteCount] = React.useState(numFavourites)
  const [editMode, setEditMode] = React.useState(false)

  const handleEditClick = () => {
    setEditMode(!editMode)
  }
  const handleCommentClick = () => {
    setCommentCount(commentCount + 1)
  }
  const handleShareClick = (status) => {
    if (status) setShareCount(shareCount - 1)
    else setShareCount(shareCount + 1)
    //setShareCount(shareCount + status ? -1 : 1)
  }
  const handleFavouriteClick = (status) => {
    if (status) setFavouriteCount(favouriteCount - 1)
    else setFavouriteCount(favouriteCount + 1)
    //setShareCount(shareCount + status ? -1 : 1)
  }
  const textChange = (event) => {
    setTextbox(event.target.value)
  }

  return (
    <div className="social-card-style">
      <Card>
        <div className="social-content-style">
          <div>
            <Button onClick={handleEditClick}>
              {editMode ? 'View' : 'Edit'}
            </Button>
          </div>
          <div className="title-container-style">
            <span className="account-name-style">
              {accountName}
              {'  '}
            </span>
            <span className="post-details-style">
              {accountHandle}
              {findDateDifference(datePosted)}
            </span>
          </div>

          <div
            className="image-style"
            style={{ backgroundImage: 'url(' + postImageURL + ')' }}
          />
          <br />
          <br />
          <BodyTextfield
            postBody={textbox}
            editMode={editMode}
            onChange={textChange}
          ></BodyTextfield>
          <br />
          <br />
          <div className="social-button-container-style">
            <Button onClick={handleCommentClick}>💬{commentCount}</Button>
            <SocialButton onClick={handleShareClick}>
              🔄{shareCount}
            </SocialButton>
            <SocialButton onClick={handleFavouriteClick} icon="♥">
              {favouriteCount}
            </SocialButton>
          </div>
        </div>
      </Card>
    </div>
  )
}

SocialCard.propTypes = {
  accountName: PropTypes.string,
  accountHandle: PropTypes.string,
  datePosted: PropTypes.object,
  postBody: PropTypes.string,
  postImageURL: PropTypes.string,
  numComments: PropTypes.number,
  numShares: PropTypes.number,
  numFavourites: PropTypes.number,
}
