import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import PortfolioList from '../portfoiloList/PortfolioList'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from '../../data'

export default function Portfolio() {

  const[selected,setselected]=useState("feature");
  const[data,setdata]=useState([])

  const list=[
    {
      id:"feature",
      title:"Feature"
    },
    {
      id:"webapp",
      title:"Web App"
    },
    {
      id:"mobileapp",
      title:"Mobile App"
    },
    {
      id:"design",
      title:"Design"
    },
    {
      id:"content",
      title:"Content"
    },
  ]

  useEffect(()=>{
    switch(selected){
      case 'feature':setdata(featuredPortfolio);break;
      case 'webapp':setdata(webPortfolio);break;
      case 'mobileapp':setdata(mobilePortfolio);break;
      case 'design':setdata(designPortfolio);break;
      case 'content':setdata(contentPortfolio);break;
      default :setdata(featuredPortfolio);break;
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} active={selected===item.id} setselected={setselected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
