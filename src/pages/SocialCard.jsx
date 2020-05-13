import React from 'react'

import { SocialCard } from '../components/SocialCard'

const SocialCardPage = () => {
  return (
    <div className="card-holder-style">
      <SocialCard
        accountName="Peggy"
        accountHandle="@djdauchound"
        datePosted={new Date(2020, 4, 13, 2, 32)}
        postBody="Come get the new album hot off the ARP2600"
        postImageURL="https://i1.sndcdn.com/avatars-000300059127-9r7fql-t500x500.jpg"
        numComments={12324}
        numShares={25543}
        numFavourites={34542}
      />

      <SocialCard
        accountName="Allan Legemaate"
        accountHandle="@realAllanLeg"
        datePosted={new Date(2020, 4, 12, 2, 11)}
        postBody="Check out the latest album Journey! The album art is amazing, especially the car featured on it."
        postImageURL="https://i1.sndcdn.com/artworks-000260825990-mpqrj7-t500x500.jpg"
        numComments={124}
        numShares={2553}
        numFavourites={4542}
      />
      <SocialCard
        accountName="Allan Legemaate"
        accountHandle="@realAllanLeg"
        datePosted={new Date(2012, 3, 17, 2, 1)}
        postBody="Shredding the new synth #breakbeatkaos"
        postImageURL="https://cdn.mos.cms.futurecdn.net/Bk3zGPpxVvwD6JKVKKk9ZQ-650-80.jpg"
        numComments={12}
        numShares={25}
        numFavourites={2}
      />
      <SocialCard
        accountName="Danny Van Stemp"
        accountHandle="@realdvs"
        datePosted={new Date(2007, 10, 3, 7, 3)}
        postBody="Just chillin' here with my boi @realAllanLeg"
        postImageURL="https://www.innovasium.com/img/team/allan_2019.jpg"
        numComments={12312}
        numShares={243525}
        numFavourites={2342}
      />
    </div>
  )
}
export default SocialCardPage
