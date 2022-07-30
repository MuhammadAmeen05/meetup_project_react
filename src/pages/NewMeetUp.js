import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../Components/meetups/NewMeetupForm'
export default function NewMeetUp() {
  const navigate = useNavigate();
  function MeetupHandler(meetupData){
    
   fetch('https://react-meetup-project-f17f9-default-rtdb.firebaseio.com/meetup.json',{
    method: 'POST', 
    body: JSON.stringify(meetupData),
    headers: {
      'Content-Type': 'application/json',
    } 
  }
  ).then(()=>{
    navigate('/')
  });   
  }
  return (
    
 <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={MeetupHandler}/>
    </section>
  )
}
