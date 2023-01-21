import React from "react";
import { Outlet } from "react-router-dom";

const CreateShop = () => {
  return (
    <div className="create-shop">
      <Outlet />
    </div>
  );
};

export default CreateShop;
