import React from "react";

import "./settingAccount.css";
import { useNavigate } from "react-router-dom";
import FormAccount from "./FormAccount";

const SettingAccount = () => {
  const navigate = useNavigate();

  const changePassword = () => {
    navigate("change-password");
  };

  return (
    <div className="setting-store setting-account">
      <button className="log-out">تسجيل الخروج</button>
      <button className="change-password" onClick={changePassword}>
        تغيير كلمة المرور
      </button>
      <FormAccount
        title="إعدادات الحساب"
        label1="الاسم"
        label2="الهاتف"
        label3="البريد الالكتروني"
        type="text"
        val1="علي شاهين"
        val2="+213558942826"
        val3="lara4@gmail.com"
      />
    </div>
  );
};

export default SettingAccount;
