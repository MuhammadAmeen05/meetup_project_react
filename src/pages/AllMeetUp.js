import React,{useState} from 'react'
import MeetUpList from '../Components/meetups/meetUpList'
import Sippner from '../Components/layout/Sippner';
import { useEffect } from 'react';
export default function AllMeetUp() {
  const[isloading,setisloading]=useState(true)
  const[loadedMeetup,setloadedMeetup]=useState([])
useEffect(()=>{
  setisloading(true)
  fetch('https://react-meetup-project-f17f9-default-rtdb.firebaseio.com/meetup.json'
  ).then((response)=>{
    return response.json() 
   
  })
  .then((data)=>{
   // console.log(data)
    const meetups=[];
    for(const key in data){
      const meetup={
        id:key,
        ...data[key]
      }
      meetups.push(meetup)
     
    }
    setisloading(false);
    setloadedMeetup(meetups)   
  });  
},[]) 
  if(isloading){
    return (
    <Sippner/>
    ) 
  }
  console.log(loadedMeetup);
  return (
    <section>
      <h1>All_MeetUps</h1>
      <MeetUpList meetups={loadedMeetup}/>
    </section>
  )
}
