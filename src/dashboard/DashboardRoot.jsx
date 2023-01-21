import React from "react";
import { Outlet } from "react-router-dom";

import "./dashboard.css";

import NavDashboard from "./NavDashboard";
import NavlinkDashboard from "./NavlinkDashboard";

const DashboardRoot = () => {
  return (
    <div className="dashboard">
      <NavDashboard />
      <div>
        <NavlinkDashboard />
        <div className="outlet-dashboard">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
