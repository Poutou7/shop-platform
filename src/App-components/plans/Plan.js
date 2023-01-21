import React from 'react'

import './plans.css'

const Plan = ({ title, price, txt, features, pack }) => {

  const result = features.map((el, index) => {
    return <li key={index} >{el}</li>
  })

  return (
    <div className='plan rad-10 border-eee'>
      <h2>{title}</h2>
      <div className='price'>
        <span className='price-span'>{price}</span>
        <span>/ {pack}</span>
      </div>
      <p>{txt}</p>
      <ul>
        {result}
      </ul>
      <button className='btn-alt-shape'>إختيار الخطة</button>
    </div>
  )
}

export default Plan
