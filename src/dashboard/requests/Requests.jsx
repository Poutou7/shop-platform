import React from "react";
import CustomComp from "../CustomComp";
import TableRequests from "./TableRequests";

const Requests = () => {
  const itemsRequests = [
    {
      id: 1,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 2,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 3,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 4,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 5,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 6,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 7,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
    {
      id: 8,
      num: "001234",
      name: "محمد علي الشحي",
      date: "08/10/2022",
      pay: "نقدا",
      shipping: "لا يوجد",
      total: "300ش",
      state: "مسلم",
    },
  ];

  return (
    <CustomComp
      title="الطلبات"
      paragraphe="عدد الطلبات 37 طلب"
      add="اضافة طلـب"
      table={TableRequests}
      items={itemsRequests}
      boxx={false}
      navigate={true}
      navigateTo="add"
    />
  );
};

export default Requests;
