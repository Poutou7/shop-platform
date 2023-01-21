import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import uploadImg from "../images/upload-image.jpg";

const Identification = () => {
  const [frontImg, getFrontImg] = useState("");
  const [backImg, getBackImg] = useState("");

  const frontImgHandler = (e) => {
    const val = e.target.value;
    getFrontImg(val);
  };

  const backImgHandler = (e) => {
    const val = e.target.value;
    getBackImg(val);
  };

  const nextHandler = (e) => {
    e.preventDefault();
    console.log(frontImg);
    console.log(backImg);
  };
  return (
    <>
      <form className="form-shop form-upload" onSubmit={nextHandler}>
        <h1 className="title-store">تأكيد الهوية الشخصية</h1>
        <div className="images">
          <div>
            <span>صورة البطاقة الامامية</span>
            <label htmlFor="front-upload">
              <img src={uploadImg} alt="upload" />
              <p>اسحب واسقط الصورة هنا</p>
              <input
                type="file"
                id="front-upload"
                value={frontImg}
                onChange={frontImgHandler}
              />
            </label>
          </div>
          <div>
            <span>صورة البطاقة الخلفية</span>
            <label htmlFor="back-upload">
              <img src={uploadImg} alt="upload" />
              <p>اسحب واسقط الصورة هنا</p>
              <input
                type="file"
                id="back-upload"
                value={backImg}
                onChange={backImgHandler}
              />
            </label>
          </div>
        </div>

        <input type="submit" value="إبدأ الان" />
      </form>
      <p>
        <bdi> مجرد إنشاء الحساب أنت توافق على </bdi>
        <NavLink to="/conditions">الشروط والأحكام </NavLink>و
        <NavLink to="/privacy">سياسة الخصوصية </NavLink>
      </p>
    </>
  );
};

export default Identification;
