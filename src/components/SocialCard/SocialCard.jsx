import React from 'react';
import './SocialCard.css';

const IMAGE_URL = "https://fyf.tac-cdn.net/images/products/large/BF52-11KM.jpg?auto=webp&quality=60" ;
const MESSAGE_ICON = "data:image/png;base64,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";
const RETWEET_ICON = "http://airemedia.co.uk/wp-content/uploads/2017/07/Retweetarrows.jpg";
const LIKE_ICON = "https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png";

const SocialCard = () => {
  const [likes, setLikes] = React.useState('34');
  const [retweets, setRetweets] = React.useState('17');
  const [mode, setMode] = React.useState('edit');

  const onModeChange = (newMode) => {
    setMode(newMode);
    console.log("It is now in " + newMode +" mode")
  }

  const onLikeClick = () => {
    let likeNum = parseInt(likes)
    likeNum = likeNum + 1
    setLikes(likeNum)
  }
  const onRetweetClick = () => {
    let retweetNum = parseInt(retweets)
    retweetNum = retweetNum + 1
    setRetweets(retweetNum)
  }

  return (
    <div className="cardFull">
      <ProfileBar modeChange={onModeChange} name="Michael Vamvakas" tag="@vamvam" date="May 10" />
      <ProfileBody postText="Hey guys, check out this flower" image={IMAGE_URL} />
      <ProfileInteraction mode={mode} icon={MESSAGE_ICON} num='3'/>
      <ProfileInteraction onClick={onRetweetClick} mode={mode} icon={RETWEET_ICON} num={retweets}/>
      <ProfileInteraction onClick={onLikeClick} mode={mode} icon={LIKE_ICON} num={likes}/>
    </div>
  )
};

const ProfileBar = ({name, tag, date, modeChange}) => {

  const onChange = (e) => {
    modeChange(e.target.value)
  }

  return (
    <div className="profileBar">
      <h1 className="left name">{name}</h1>
      <h1 className="left tag">{tag}</h1>
      <h1 className="left date">- {date}</h1>
      <select onChange={onChange} className="right">
        <option value="edit">Edit</option>
        <option value="view">View</option>
      </select>
    </div>
  )
}

const ProfileBody = (props) => {
  return (
    <div className="profileBody left">
      <h2 className="postText left">{props.postText}</h2>
      <br />  <br />  <br />  <br />
      <img className="image" src="https://fyf.tac-cdn.net/images/products/large/BF52-11KM.jpg?auto=webp&quality=60" alt="Flower" />
    </div>
  )
}

const ProfileInteraction = ({mode, icon, num, onClick}) => {


  let isEdit = (mode === 'edit')? true: false

  return (
    <div className="left">
      <div>
        <img onClick={onClick} className={isEdit? "icon" : "iconDisabled"} src={icon} alt="Message" />

      </div>
      <div>
        <h1 className="iconVal left">{num}</h1>

      </div>
    </div>
  )
}


export default SocialCard;
