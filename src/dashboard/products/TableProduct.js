import React, { useState } from 'react'


const Table = ({ items }) => {

  const [showStep, getShowStep] = useState(false);

  const showProcedure = () => {
    getShowStep(!showStep);
  };



  const itemsResult = items.map((item) => {

    let classPublish = "";
    if (item.publish === "منشور") {
      classPublish = "published";
    } else {
      classPublish = "closed";
    }

    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.product}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.codeP}</td>
      <td>{item.Qt}</td>
      <td>{item.price}</td>
      <td>
        <span className={classPublish}>
          {item.publish}
        </span>
      </td>
      <td>
        <div className='procedure' onClick={showProcedure}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </td>
    </tr>
  })

  return (
    <div style={{ overflow: "auto" }}>
      <table className={`table-dashboard table-product`} >
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>المنتج</th>
            <th>الاسم</th>
            <th>التصنيف</th>
            <th>رمز المنتج</th>
            <th>الكمية</th>
            <th>السعر</th>
            <th>النشر على المتجر</th>
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

export default Table;
