import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";

const FormInfos = () => {
  const infoShopState = useSelector((state) => state.infoShop);

  const [inputVal, getInputVal] = useState({
    shopNameAr: "",
    shopnameEn: "",
    shopURL: infoShopState.name,
    aboutPlatform: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "shopNameAr") {
      const nameArr = Array.from(value);
      const clearName = nameArr.filter((el) => {
        return /[أ-ي]/gi.test(el);
      });
      value = clearName.join("").toLowerCase();
    }

    if (name === "shopnameEn") {
      const nameArr = Array.from(value);
      const clearName = nameArr.filter((el) => {
        return /[a-z]/gi.test(el);
      });
      value = clearName.join("").toLowerCase();
    }

    getInputVal((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const nextHandler = (e) => {
    e.preventDefault();
    navigate("/shop/create-store/personal-identification", { replace: true });
    console.log(inputVal.shopNameAr);
    console.log(inputVal.shopnameEn);
    console.log(inputVal.shopURL);
    console.log(inputVal.aboutPlatform);
  };

  return (
    <>
      <h1 className="title-store">أنشئ متجرك بخطوتين</h1>
      <form className="form-shop" onSubmit={nextHandler}>
        <label>اسم المتجر بالعربية</label>
        <input
          type="text"
          placeholder="ادخل الاسم بالعربية.."
          name="shopNameAr"
          value={inputVal.shopNameAr}
          onChange={onChangeHandler}
          required
        />
        <label>اسم المتجر بالانجليزية</label>
        <input
          type="text"
          placeholder="ادخل الاسم بالانجليزية.."
          name="shopnameEn"
          value={inputVal.shopnameEn}
          onChange={onChangeHandler}
          required
        />
        <label>رابط المتجر الخاص بك سيكون كالتالي</label>
        <input
          type="text"
          name="shopURL"
          value={`tadjriba.ps/${inputVal.shopURL}`}
          onChange={onChangeHandler}
          disabled
        />
        <label>كيف سمعت عن المنصة</label>
        <input
          type="text"
          placeholder="من أين سمعت بالمنصة.."
          name="aboutPlatform"
          value={inputVal.aboutPlatform}
          onChange={onChangeHandler}
          required
        />
        <input type="submit" value="التالي" />
      </form>
      <p>
        <bdi> مجرد إنشاء الحساب أنت توافق على </bdi>
        <NavLink to="/conditions">الشروط والأحكام </NavLink>و
        <NavLink to="/privacy">سياسة الخصوصية </NavLink>
      </p>
    </>
  );
};

export default FormInfos;
