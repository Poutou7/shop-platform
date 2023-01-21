import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddCategory from "./categories/AddCategory";

import "./customComp.css";
import AddCustomer from "./customers/AddCustomer";
import ProductBox from "./products/ProductBox";

const CustomComp = ({
  title,
  paragraphe,
  add,
  table: Table,
  items,
  boxx,
  navigate,
  navigateTo,
  onClick,
  children,
  addCategory,
  addClient,
}) => {
  const displayFormat = useSelector((state) => state.products.displayFormat);

  return (
    <>
      <div className="custom-comp">
        <h1 className="title-dashboard">{title}</h1>
        <p>{paragraphe}</p>
        <div className="search-add-product flex-between">
          <div className="search">
            <input type="text" placeholder="البحث" />
            <button onClick={onClick}>بحث</button>
          </div>
          {navigate ? (
            <NavLink to={navigateTo}>{add}</NavLink>
          ) : (
            <button onClick={onClick}>{add}</button>
          )}
        </div>

        {children}

        {boxx ? (
          displayFormat === "bar" ? (
            <Table items={items} />
          ) : (
            <ProductBox itemsProducts={items} />
          )
        ) : (
          <Table items={items} />
        )}
      </div>

      {addCategory && (
        <div className="add-cat-cus">
          <AddCategory />
        </div>
      )}

      {addClient && (
        <div className="add-cat-cus">
          <AddCustomer />
        </div>
      )}
    </>
  );
};

export default CustomComp;
