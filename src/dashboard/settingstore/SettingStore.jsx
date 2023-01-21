import React from "react";
import { useSelector } from "react-redux";
import "./settingStore.css";
import logo from "../images/fox.jpg";

const SettingStore = () => {
  const nameStore = useSelector((state) => state.infoShop.name);

  return (
    <div className="setting-store">
      <h1 className="title-dashboard">إعداد المتجر</h1>
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>
            <i class="fa-solid fa-camera-rotate"></i>
          </div>
        </div>
        <form>
          <label>
            اسم المتجر
            <input type="text" value={`متجر ${nameStore}`} />
          </label>
          <label>
            الوصف
            <textarea>{`متجر ${nameStore}`}</textarea>
          </label>
          <label>
            مكان المتجر
            <div className="location">
              <input type="text" value="العراق" />
              <button>تحديد</button>
            </div>
          </label>
          <input type="submit" value="حفظ" />
        </form>
      </div>
    </div>
  );
};

export default SettingStore;
