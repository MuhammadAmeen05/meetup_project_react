import React from 'react'
import classes from './MainNavigation.module.css'
import {
    Link,
  } from "react-router-dom";
  import { useContext } from 'react';
  import FavouritesContext from '../../Store/Favourite-context';

export default function MainNavigation() {
  const favouriteCtx=useContext(FavouritesContext)
  return (
    <header className={classes.header}>
    <div className={classes.logo}>React Meetup</div>
    <nav>
        <ul>
            <li><Link to='/'>All Meetup</Link></li>
            <li><Link to='/new-meetup'>Add New_Meetup</Link></li>
            <li><Link to='/favourite'>My Favourites
            <span className={classes.badge}>{favouriteCtx.totalFavourite}</span></Link></li>
        </ul>
    </nav>
    </header>
  )
}
