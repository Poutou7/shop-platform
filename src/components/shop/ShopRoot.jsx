import React from "react";
import { Outlet } from "react-router-dom";

import "./shop.css";

import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

const ShopRoot = () => {
  return (
    <div className="shop">
      <div className="outlet">
        <div className="logo flex">
          <img src={logo2} alt="" />
          <span>تجربة</span>
        </div>
        <Outlet />
      </div>
      <div className="logo-page">
        <img src={logo} alt="logo" />
        <h1>تجــربــة</h1>
      </div>
    </div>
  );
};

export default ShopRoot;
