import React from 'react'
import { useContext } from 'react'
import FavouritesContext from '../Store/Favourite-context'
import MeetUpList from '../Components/meetups/meetUpList'
export default function Favourite(props) {
  const favouriteCtx=useContext(FavouritesContext)
  let content;
  if(favouriteCtx.totalFavourite===0){
    <p>There is No favourite meetup Yet Start adding it?</p>
  }
  else{
  content  =<MeetUpList meetups={favouriteCtx.favourite}/>
    
  }
  return (
    <section> 
      <h1>Favourites</h1>
      {content}
    </section>
  )
}
