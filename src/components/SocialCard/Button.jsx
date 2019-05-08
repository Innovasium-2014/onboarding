import React from 'react';
import './SocialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button ({ icon, value, callback }) {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div 
      className = {
        'tweet-comments tweet-button ' +
        (clicked ? 'tweet-button-clicked' : '')
      }
      onClick = {
        () => {
          callback(!clicked)
          setClicked(!clicked)
        }
      }
    >
      <FontAwesomeIcon icon = {icon} />
      {value}
    </div>
  )
}

export default Button;
