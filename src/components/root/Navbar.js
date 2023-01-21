import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import Button from '../Button';

import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [show, getShow] = useState(false);
  const navigate = useNavigate();


  const showMenu = () => {
    getShow(!show);
  }

  const createShop = () => {
    navigate("/shop/create-store");
  }

  return (
    <div className='navbar'>
      <div className='logo'>منصة تجربة</div>
      <span onClick={showMenu}>
        <i className="fa-solid fa-bars"></i>
      </span>
      <div className={`menu ${show ? "mobile" : ""}`}>
        <div className='close'>
          <h3>منصة تجربة</h3>
          <span onClick={showMenu}>
            <i className="fa-regular fa-circle-xmark"></i>
          </span>
        </div>
        <ul>
          <li><NavLink to="/" > الرئيـسيـة</NavLink></li>
          <li><NavLink to="/price" > الأسعــار</NavLink></li>
          <li><NavLink to="/blog" > المـدونـة</NavLink></li>
          <li><NavLink to="/about" >حـول المنـصـة</NavLink></li>
          <li><NavLink to="/contact" >تـواصل مـعـــنا</NavLink></li>
        </ul>
        <div className='login'>
          <NavLink to="/shop/login" style={{ textAlign: "center" }}>تسجيل الدخول</NavLink>
          <Button value='الاشتراك' onClick={createShop} />
        </div>
      </div>

      <div className='join'>إشتراك</div>
    </div>
  )
}

export default Navbar;