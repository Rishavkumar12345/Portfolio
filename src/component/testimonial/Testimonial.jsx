import React from 'react'
import './Testimonial.scss'

export default function Testimonial() {

  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/insta.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/youtube.avif",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/lin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      

      
      <div className="container">
        {data.map((d)=>(

        
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assests/curv-arrow.jpg"  className="left" alt="" />
            <img src={d.img} className='mid' alt="" />
            <img src={d.icon} className='right' alt="" />

          </div>
          <div className="center">
            <p>{d.desc}</p>
          </div>
          <div className="bottom">
            <h2>{d.name}</h2>
            <h3>{d.title}</h3>
          </div>
        </div>
        ))};
      </div>
      
    </div>
  )
}
