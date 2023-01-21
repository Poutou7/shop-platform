import React from 'react'

import './components.css'

const Button = ({ value, onClick }) => {
  return (
    <button className='btn-shape' onClick={onClick}>{value}</button>
  )
}

export default Button
