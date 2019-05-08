import React from 'react';
import './SocialCard.css';
import Card from './Card'

const SocialCard = () => {
  const [editMode, setEditMode] = React.useState(false)

  return (
    <div>
      <Card 
        accountName='Allan Legemaate' 
        accountHandle='@alegemaate' 
        date='10/10/10 12:12:00'
        body='This is a test'
        image='https://pbs.twimg.com/media/D5-H5SGWAAI1GJh.png:large'
        comments='11'
        shares='2'
        favorites='12'
      />
      <Card 
        accountName='Allan Legemaate' 
        accountHandle='@alegemaate' 
        date='10/10/10 12:12:00'
        body='How to use react'
        image=''
        comments='0'
        shares='0'
        favorites='12'
      />

      <Card 
        accountName='Allan Legemaate' 
        accountHandle='@alegemaate' 
        date='10/10/10 12:12:40'
        body="Wait, this isn't Google"
        image=''
        comments='5435'
        shares='2345'
        favorites='12321'
      />
    </div>
  )
}

export default SocialCard;
