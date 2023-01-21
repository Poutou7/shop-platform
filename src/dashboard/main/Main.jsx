import React from "react";
import Box from "./Box";

import "./main.css";

import img1 from "../images/main1.png";
import img2 from "../images/main2.png";
import img3 from "../images/main3.png";
import img4 from "../images/main4.png";
import TableMain from "./TableMain";

const Main = () => {
  const boxes = [
    {
      id: 1,
      img: img1,
      title: "الطلبات",
      type: "طلب",
    },
    {
      id: 2,
      img: img2,
      title: "صافي الربح",
      type: "شيكل",
    },
    {
      id: 3,
      img: img3,
      title: "العملاء",
      type: "عميل",
    },
    {
      id: 4,
      img: img4,
      title: "المبيعات",
      type: "شيكل",
    },
  ];

  const resultBox = boxes.map((el) => {
    return <Box key={el.id} img={el.img} title={el.title} type={el.type} />;
  });

  const clients = [
    {
      id: 1,
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
      hash: "00123",
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
    <div className="main-dashboard">
      <h1 className="title-dashboard">ملخص شهر نوفمبر</h1>
      <div className="grid-container">{resultBox}</div>
      <p>آخر الطلبات</p>
      <TableMain clients={clients} />
    </div>
  );
};

export default Main;
