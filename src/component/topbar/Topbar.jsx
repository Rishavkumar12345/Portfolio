import React from 'react';
import './Topbar.scss';


export default function Topbar({menuopen,setmenuopen}) {
  
  return (
    <div className={'topbar '+(menuopen && 'active')}>
      <div className="wrapper">
        <div className="leftside">
          <a href="#intro" className='logo'>genius.</a>
          <div className='itemcontainer'>
            <img src="assests/contact.png" className='icon' alt="" />
            <span>+91-6209846349</span>
          </div>
          <div className='itemcontainer'>
            <img src="assests/mail.png" className='icon' alt="" />
            <span>rishavunique@gmail.com</span>
          </div>
        </div>
        <div className="rightside">
          <div className="humburger" onClick={()=>setmenuopen(!menuopen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
