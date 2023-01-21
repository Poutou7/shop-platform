import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./reports.css";

const Trends = () => {
  return (
    <div className="reports">
      <h1 className="title-dashboard">التقارير</h1>
      <div className="links">
        <h2>نوع التقارير</h2>
        <div className="flex">
          <NavLink to="" end>
            المبيعات
          </NavLink>
          <NavLink to="products">المنتجات</NavLink>
          <NavLink to="clients">العملاء</NavLink>
          <NavLink to="more">الأكثر طلبا</NavLink>
        </div>
      </div>
      <div className="content-reports">
        <Outlet />
      </div>
    </div>
  );
};

export default Trends;
