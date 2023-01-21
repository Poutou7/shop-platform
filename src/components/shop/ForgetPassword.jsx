import React from "react";

const ForgetPassword = ({ title }) => {
  return (
    <div className="forget-password">
      <h1 className="title-store">{title}</h1>
      <div>
        <span className="verify-code">كود التحقق</span>
        <ul className="flex-between">
          <li>9</li>
          <li>5</li>
          <li>7</li>
          <li>3</li>
          <li>9</li>
        </ul>
        <button className="btn-alt-shape">تأكيد</button>
        <span className="send-code">سيتم ارسال كود التحقق خلال 60 ثانية</span>
        <a href="#">اعادة ارسال</a>
      </div>
    </div>
  );
};

export default ForgetPassword;
