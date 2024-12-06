import React from 'react'
import img1 from '../img/pplay-1.jpg'
import '../style.scss'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={img1} alt="my-image"/>
      
      <div className="user">
        <img src={img1} alt="user profile"/>
      
      <div className="info">
        <span>John</span>
        <p>posted 2 days ago</p>
      </div>
      </div>
      </div>
      <div className="menu">m</div>

    </div>
  )
}

export default Single