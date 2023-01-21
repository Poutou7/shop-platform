import React from "react";
import CustomComp from "../CustomComp";
import DisplayTable from "./DisplayTable";
import TableProduct from "./TableProduct";

const Products = () => {
  const itemsProducts = [
    {
      id: 1,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
    {
      id: 2,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
    {
      id: 3,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
    {
      id: 4,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
    {
      id: 5,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "مغلق",
    },
    {
      id: 6,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
    {
      id: 7,
      product: "001234",
      name: "ورد أحمد صناعي",
      category: "ورد زينة",
      codeP: "7888888",
      Qt: "80",
      price: "05",
      publish: "منشور",
    },
  ];

  return (
    <CustomComp
      title="المنتجات"
      paragraphe="عدد المنتجات 37 منتج"
      add="اضافة منتج"
      table={TableProduct}
      items={itemsProducts}
      boxx={true}
      navigate={true}
      navigateTo="add"
    >
      <DisplayTable />
    </CustomComp>
  );
};

export default Products;
