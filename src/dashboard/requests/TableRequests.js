import React, { useState } from 'react'


const TableRequests = ({ items }) => {

  const [showStep, getShowStep] = useState(false);

  const showProcedure = () => {
    getShowStep(!showStep);
  };



  const itemsResult = items.map((item) => {
    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.num}</td>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.pay}</td>
      <td>{item.shipping}</td>
      <td>{item.total}</td>
      <td>{item.state}</td>
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
            <th>رقم الطلب</th>
            <th>اسم العميل</th>
            <th>تاريخ الطلب</th>
            <th>الدفع</th>
            <th>الشحن</th>
            <th>المجموع</th>
            <th>حالة الطلب</th>
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

export default TableRequests;
