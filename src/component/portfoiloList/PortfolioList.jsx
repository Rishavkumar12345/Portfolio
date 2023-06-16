import React from 'react'
import './PortfoiloList.scss'

export default function PortfolioList({title,active,setselected,id}) {
  return (
    <div>
      <li className={active ? "portfoliolist active":"portfoliolist"} onClick={()=>setselected(id)}>{title}</li>
    </div>
  )
}
