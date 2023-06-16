import React from 'react'
import './Contact.scss';

export default function Contact() {

  const submitbutton =(e)=>{
    e.preventdefault();
  };

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assests/shake1.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        <form onSubmit={submitbutton}>
          <input type="text" name="Email" id="" placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

