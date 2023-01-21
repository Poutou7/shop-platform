import React, { useState } from 'react'


const TableCustomers = ({ items }) => {

  const [showStep, getShowStep] = useState(false);

  const showProcedure = () => {
    getShowStep(!showStep);
  };



  const itemsResult = items.map((item) => {


    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.numberReq}</td>
      <td>
        <div className='procedure' onClick={showProcedure}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </td>
    </tr>
  })

  return (
    <div style={{ overflow: "auto" }}>
      <table className={`table-dashboard`} >
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>الاسم</th>
            <th>تاريخ التسيجل</th>
            <th>رقم الجوال</th>
            <th>البريد الالكتروني</th>
            <th>عدد الطلبات</th>
            <th>اجراءات</th>
          </tr>
        </thead>
        <tbody>
          {itemsResult}
        </tbody>
      </table>
    </div>
  )
}

export default TableCustomers;
