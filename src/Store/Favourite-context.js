import { createContext,useState } from "react";
const FavouritesContext=createContext({
    favourite:[],
    totalFavourite:0,
    addfavourite:(favouriteMeetup)=>{},
    removefavourite:(meetupId)=>{},
    itemIsfavourite:(meetupId)=>{}
    

});
 export function FavouritesContextProvider(props){
  const [userFavourite,setuserFavourite]=useState([]);
  function addFavouriteHandler(favouriteMeetup){
   setuserFavourite((prevUserFavourites)=>{
    return prevUserFavourites.concat(favouriteMeetup)

   })
  }
  function removeFavouriteHandler(meetupId){
    setuserFavourite(prevUserFavourites=>{
        return prevUserFavourites.filter(meetup=> meetup.id !==meetupId)
    })
  }
  function itemIsFavouriteHandler(meetupId){
    return userFavourite.some(meetup=>meetup.id ===meetupId);
  }
  const context={
   favourite:userFavourite,
   totalFavourite:userFavourite.length,
   addfavourite:addFavouriteHandler,
   removefavourite:removeFavouriteHandler,
   itemIsfavourite:itemIsFavouriteHandler
  };
  return <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;