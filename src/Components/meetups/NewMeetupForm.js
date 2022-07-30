import React,{useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm(props) {
  const titleInputRef=useRef();
  const ImgInputRef=useRef();
  const addressInputRef=useRef();
  const descriptionInputRef=useRef();
  function SubmitHandler(event){
    event.preventDefault();
    const enteredTitle=titleInputRef.current.value;
   const enteredImg = ImgInputRef.current.value;
   const enteredAddress=addressInputRef.current.value
   const enteredDescription=descriptionInputRef.current.value
   const meetupData={
    title:enteredTitle,
    image:enteredImg,
    address:enteredAddress,
    description:enteredDescription
   }
   props.onAddMeetup(meetupData)
  }
  return (
    <Card>
      <form action="" className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id='title' required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image Url</label>
          <input type="url" id='image' required ref={ImgInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id='address' required  ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" id='description' required ref={descriptionInputRef} rows='5'/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
