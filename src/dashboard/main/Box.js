import React from 'react'

const Box = ({ img, title, type }) => {
  return (
    <div className='main-box border-eee rad-10 flex'>
      <img src={img} alt="" />
      <div>
        <span>{title}</span>
        <p><span>1520</span> {type}</p>
      </div>
    </div>
  )
}

export default Box
