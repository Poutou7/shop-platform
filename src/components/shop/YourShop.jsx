import React from "react";
import { useNavigate } from "react-router-dom";

const YourShop = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/shop/login");
  };

  const create = () => {
    navigate("/shop/create-store");
  };

  return (
    <div className="your-shop">
      <button className="btn-shape btn-your-shop" onClick={login}>
        تسجيل الدخول
      </button>
      <button className="btn-shape btn-your-shop" onClick={create}>
        إنشاء متجر مجانا
      </button>
    </div>
  );
};

export default YourShop;
