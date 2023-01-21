import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginShop = () => {
  const navigate = useNavigate();

  const enterShop = (e) => {
    e.preventDefault();
    console.log("Entering the Shop");
  };

  const createNewShop = () => {
    navigate("/shop/create-store", { replace: true });
  };

  return (
    <>
      <h1 className="title-store">تسجيل الدخول</h1>
      <form className="form-shop" onSubmit={enterShop}>
        <label>البريد الالكتروني</label>
        <input
          type="email"
          placeholder="ادخل البريد الالكتروني.."
          name="email"
          required
        />
        <label>كلمة المرور</label>
        <input
          type="password"
          placeholder="*************"
          name="password"
          required
        />
        <div className="about-password flex-between">
          <label htmlFor="remember">
            <input id="remember" type="checkbox" name="remember" />
            تذكرني
          </label>
          <NavLink to="/shop/forget-password">نسيت كلمة المرور؟؟</NavLink>
        </div>
        <input type="submit" value="الدخول" />
      </form>

      <div className="create-new-shop">
        <p>ليس لديك حساب متجر؟</p>
        <button onClick={createNewShop}>انشاء متجر جديد</button>
      </div>
    </>
  );
};

export default LoginShop;
