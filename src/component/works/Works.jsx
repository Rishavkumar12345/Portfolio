import React, { useState } from 'react'
import './Works.scss'

export default function Works() {

  const[currslide,setcurrslide]=useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleclick =(way)=>{
    way==="left" 
    ? setcurrslide(currslide > 0 ? currslide - 1 : 2)
    : setcurrslide(currslide < data.length - 1 ? currslide + 1 : 0); 
  };

  return (
    <div className='work' id='work'>
      <div className="slider" style={{transform:`translateX(-${currslide *100}vw)`}}>
        {data.map((d)=>( 
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt="" />
                </div>
                <h1>{d.title}</h1>
                <p>{d.desc}</p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))};
      </div>
      <img src="assests/left-arrow.png" className="arrow left" alt="" onClick={()=>handleclick("left")}/>
      <img src="assests/left-arrow.png" className='arrow right' alt="" onClick={()=>handleclick()}/>
    </div>
  )
}

