import React, { useState } from 'react'


const TableCategorie = ({ items }) => {

  const [showStep, getShowStep] = useState(false);

  const showProcedure = () => {
    getShowStep(!showStep);
  };



  const itemsResult = items.map((item) => {

    let classPublish = "";
    if (item.state === "نشط") {
      classPublish = "published";
    } else {
      classPublish = "closed";
    }

    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.name}</td>
      <td>
        <span className={classPublish}>
          {item.state}
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
      <table className={`table-dashboard`} >
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>اسم التصنيف</th>
            <th>حالة التصنيف</th>
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

export default TableCategorie;
