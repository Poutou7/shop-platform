import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomComp from "../CustomComp";
import TableCategorie from "./TableCategorie";
import { getaddCategory } from "../../store/addItemSlice";

const Categories = () => {
  const showAddCategory = useSelector((state) => state.addItem.addCategory);
  const dispatch = useDispatch();

  const addCategory = () => {
    dispatch(getaddCategory());
  };

  const itemsCategorie = [
    {
      id: 1,
      name: "ورد صناعي",
      state: "نشط",
    },
    {
      id: 2,
      name: "ورد صناعي",
      state: "نشط",
    },
    {
      id: 3,
      name: "ورد صناعي",
      state: "نشط",
    },
    {
      id: 4,
      name: "ورد صناعي",
      state: "مجمد",
    },
    {
      id: 5,
      name: "ورد صناعي",
      state: "نشط",
    },
    {
      id: 6,
      name: "ورد صناعي",
      state: "نشط",
    },
  ];

  return (
    <CustomComp
      title="التصنيفات"
      paragraphe="عدد التصنيفات 37 طلب"
      add="اضافة تصنيف"
      table={TableCategorie}
      items={itemsCategorie}
      boxx={false}
      navigate={false}
      onClick={addCategory}
      addCategory={showAddCategory}
    />
  );
};

export default Categories;
