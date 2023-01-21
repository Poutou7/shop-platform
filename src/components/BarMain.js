import React from 'react'
import { NavLink } from 'react-router-dom'


import { useNavigate } from "react-router-dom";


import './components.css'

const BarMain = ({ items }) => {


  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
  }


  const result = items.map((item) => {
    return <li key={item.id}>
      <NavLink onClick={logoutHandler} >{item.title}</NavLink>
    </li>
  })

  return (
    <div className='bar-main'>
      <ul className='flex'>
        <li><NavLink to='/' >الرئيـسيـة</NavLink></li>
        {result}
      </ul>
    </div>
  )
}

export default BarMain
