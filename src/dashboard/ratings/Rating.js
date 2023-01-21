import React from 'react'
import './ratings.css'


const Rating = ({ photo, name, txt }) => {


  return (
    <div className='rating'>
      <p className='date'>22.03.2022</p>
      <div className='info flex'>
        <img src={photo} alt="photos" />
        <div>
          <span>{name}</span>
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <p className='txt'>{txt}</p>
      <div className='interaction'>
        <button>نشر</button>
        <button>رد</button>
      </div>
    </div>
  )
}

export default Rating
