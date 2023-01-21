import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getaddPage } from "../../store/addItemSlice";
import AddPage from "./AddPage";
import "./pages.css";

const Pages = () => {
  const showAddPage = useSelector((state) => state.addItem.addPage);
  const dispatch = useDispatch();

  const addPage = () => {
    dispatch(getaddPage());
  };

  return (
    <>
      <div className="custom-comp pages">
        <h1 className="title-dashboard">الصفحات التعريفية</h1>
        <div className="search-add-product flex-between add-page">
          <button onClick={addPage}>اضافة صفحة</button>
        </div>
        <div className="conditions">
          <h2>الصفحات التعريفية</h2>
          <div className="flex-between">
            <p>الشروط و الاحكام</p>
            <input type="checkbox" className="custom-input" defaultChecked />
          </div>
          <div className="flex-between">
            <p>سياسة الخصوصية</p>
            <input type="checkbox" className="custom-input" defaultChecked />
          </div>
        </div>
      </div>

      {showAddPage && (
        <div className="add-cat-cus add-page">
          <AddPage />
        </div>
      )}
    </>
  );
};

export default Pages;
