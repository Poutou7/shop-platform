import React, { useState } from 'react'

import sheep from './images/sheep.jpg';
import bell from './images/bell.png';

import { useDispatch } from 'react-redux';
import { showList } from "../store/showListDashboardSlice";

const NavDashboard = () => {

  const [show, getShowSearch] = useState(false);

  const dispatch = useDispatch();

  const showHideListDashboard = () => {
    dispatch(showList());
  }

  const showSearch = () => {
    getShowSearch(!show);
  }

  return (
    <div className='nav-dashboard flex-between'>
      <div className='logo'>
        <span onClick={showHideListDashboard}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <span>تجربة</span>
      </div>
      <form className='search'>
        <input type="text" placeholder='البحث' />
        <select name="requests">
          <option value="requests1" >requests1</option>
          <option value="requests2">requests2</option>
          <option value="requests3">requests3</option>
          <option value="requests4">requests4</option>
        </select>
        <input type="submit" value="بحث" />
      </form>
      <div className='bells flex'>
        <div>
          <img src={sheep} alt="" />
          <span>علي شاهين</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div>
          <img src={bell} alt="bell" />
        </div>
      </div>
      <i className="search fa-solid fa-magnifying-glass" onClick={showSearch}></i>

      {
        show &&
        <div className='show-list'>
          <i className="fa-solid fa-circle-xmark" onClick={showSearch}></i>
          <form className='flex'>
            <div>
              <input type="text" placeholder='البحث' />
              <select name="requests">
                <option value="requests1" >requests1</option>
                <option value="requests2">requests2</option>
                <option value="requests3">requests3</option>
                <option value="requests4">requests4</option>
              </select>
            </div>
            <input type="submit" value="بحث" />
          </form>
        </div>
      }
    </div>
  )
}

export default NavDashboard
