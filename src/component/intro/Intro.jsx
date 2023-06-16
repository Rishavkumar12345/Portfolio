import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'

export default function Intro() {

  const textref=useRef();
  useEffect(()=>{
    init(textref.current,{
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      
      strings:['Java Developer','Frontend Developer'],
    });
  },[]);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="assests/men1.png" alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h3 className='f'>Hi There, I'm</h3>
          <h1 className='s'>Rishav Kumar</h1>
          <h3>SDE <span ref={textref}></span></h3>
        </div>
        <a href="#portfolio"><img src="assests/down.png" alt="" /></a>
      </div>
    </div>
  )
}
