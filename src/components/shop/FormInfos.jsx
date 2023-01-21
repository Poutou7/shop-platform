import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { putName } from "../../store/infoShopSlice";

const FormInfos = () => {
  const [inputVal, getInputVal] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // لتصفية الاسم من الارقام الزائدة و المسافات و الرموز الاخرى
  const filterName = (fullName) => {
    return fullName.replaceAll(" ", "_");
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    // لكتابة الاسم بالحروف فقط دون الارقام و الرموز
    if (name === "name") {
      const nameArr = Array.from(value);
      const clearName = nameArr.filter((el) => {
        return /[a-z\s]/gi.test(el);
      });
      value = clearName.join("").toLowerCase();
    }

    // لكتابة رقم الهاتف بالارقام فقط
    if (name === "phone") {
      const phoneArr = Array.from(value);
      const clearPhone = phoneArr.filter((el) => {
        return /[0-9]/gi.test(el);
      });
      value = clearPhone.join("");
    }

    getInputVal((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const nextHandler = (e) => {
    e.preventDefault();

    navigate("/shop/create-store/your-shop-information", { replace: true });

    console.log(inputVal.name);
    console.log(inputVal.email);
    console.log(inputVal.phone);
    console.log(inputVal.password);
    dispatch(putName(filterName(inputVal.name)));
  };

  return (
    <>
      <h1 className="title-store">أنشئ متجرك بخطوتين</h1>
      <form className="form-shop" onSubmit={nextHandler}>
        <label>الاسم كاملا</label>
        <input
          type="text"
          placeholder="ادخل الاسم كاملاً.."
          name="name"
          value={inputVal.name}
          onChange={onChangeHandler}
          required
        />
        <label>البريد الإلكتروني</label>
        <input
          type="email"
          placeholder="ادخل  البريد الإلكتروني.."
          name="email"
          value={inputVal.email}
          onChange={onChangeHandler}
          required
        />
        <label>رقم الهاتف</label>
        <input
          type="phone"
          placeholder="ادخل رقم الهاتف.."
          name="phone"
          value={inputVal.phone}
          onChange={onChangeHandler}
          required
        />
        <label>كلمة المرور</label>
        <input
          type="password"
          placeholder="كلمة المرور.."
          name="password"
          value={inputVal.password}
          onChange={onChangeHandler}
          required
        />
        <input type="submit" value="التالي" />
        <p>
          هل لديك حساب في تجربة <NavLink to="/shop/login">تسجيل الدخول</NavLink>
        </p>
      </form>
    </>
  );
};

export default FormInfos;
