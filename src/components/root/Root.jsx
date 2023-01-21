import React from "react";

import "./root.css";

import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="app">
      <div className="nav-bar">
        <Navbar />
      </div>
      <Outlet />
      <div className="subscribe-content">
        <div className="subscribe container flex-between">
          <Subscribe />
        </div>
      </div>
      <div className="contact container flex-between">
        <Contact />
      </div>
    </div>
  );
};

export default Root;
