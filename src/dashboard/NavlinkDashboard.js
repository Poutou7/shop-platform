import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import logo from "./images/fox.jpg";

const NavlinkDashboard = () => {

  const stateDashboard = useSelector((state) => state.showListDashboard.show);

  const nameStore = useSelector((state) => state.infoShop.name);

  return (
    <div className={`navlink-dashboard ${stateDashboard ? "show" : ""} `}>
      <div className="logo flex">
        <img src={logo} alt="" />
        <span>متجر {nameStore}</span>
      </div>
      <ul>
        <li>
          <NavLink to="/dashboard" end>
            <i className="fa-solid fa-house"></i>
            الرئيسية
          </NavLink>
        </li>
        <li>
          <NavLink to="products">
            <i className="fa-solid fa-chart-simple"></i>
            المنتجات
          </NavLink>
        </li>
        <li>
          <NavLink to="categories">
            <i className="fa-solid fa-chart-simple"></i>
            التصنيفات
          </NavLink>
        </li>
        <li className="requests">
          <NavLink to="requests">
            <i className="fa-solid fa-store"></i>
            الطلبات
          </NavLink>
        </li>
        <li>
          <NavLink to="customers">
            <i className="fa-solid fa-shield-heart"></i>
            العملاء
          </NavLink>
        </li>
        <li>
          <NavLink to="reports">
            <i className="fa-solid fa-arrow-trend-up"></i>
            التقارير
          </NavLink>
        </li>
        <li>
          <NavLink to="wallets">
            <i className="fa-solid fa-money-bills"></i>
            المحفظة والفواتير
          </NavLink>
        </li>
        <li>
          <NavLink to="pages">
            <i className="fa-solid fa-pager"></i>
            الصفحات التعريفية
          </NavLink>
        </li>
        <li>
          <NavLink to="ratings">
            <i className="fa-solid fa-shield-heart"></i>
            التقييمات
          </NavLink>
        </li>
        <li>
          <NavLink to="setting-store">
            <i className="fa-solid fa-gear"></i>
            إعداد المتجر
          </NavLink>
        </li>
        <li>
          <NavLink to="design-store">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            تصميم المتجر
          </NavLink>
        </li>
        <li>
          <NavLink to="setting-account">
            <i className="fa-solid fa-gear"></i>
            إعدادات الحساب
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavlinkDashboard;
