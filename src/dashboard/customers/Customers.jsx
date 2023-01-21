import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomComp from "../CustomComp";
import TableCustomers from "./TableCustomers";
import { getaddClient } from "../../store/addItemSlice";

const Customers = () => {
  const showAddClient = useSelector((state) => state.addItem.addClient);
  const dispatch = useDispatch();

  const itemsCustomers = [
    {
      id: 1,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 2,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 3,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 4,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 5,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 6,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 7,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 8,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 9,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
    {
      id: 10,
      name: "هشام لعراب",
      date: "8/10/2022",
      phone: "0564842446",
      email: "hichem@gmail.com",
      numberReq: "4",
    },
  ];

  const addCustomers = () => {
    dispatch(getaddClient());
  };

  return (
    <CustomComp
      title="العملاء"
      paragraphe="عدد العملاء 37 عميل"
      add="اضافة عميل"
      table={TableCustomers}
      items={itemsCustomers}
      boxx={false}
      navigate={false}
      onClick={addCustomers}
      addClient={showAddClient}
    />
  );
};

export default Customers;
