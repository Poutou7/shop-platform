import React from 'react'

const Box = ({ id, icon, title, txt }) => {
  return (
    <div className='box rad-20 border-eee'>
      <h1>{id}</h1>
      {icon}
      <h4>{title}</h4>
      <p>{txt}</p>
    </div>
  )
}

export default Box;
