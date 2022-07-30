import React from 'react'
import classes from './meetUpList.module.css'
import MeetUpItems from './meetUpItems'
export default function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup)=><MeetUpItems key={meetup.id} id={meetup.id}
      title={meetup.title}
      image={meetup.image}
      address={meetup.address}
      description={meetup.description}
      />)}
    </ul>
  )
}
