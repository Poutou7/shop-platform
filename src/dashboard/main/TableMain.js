import React from 'react'


const Table = ({ clients }) => {


  const result = clients.map((client) => {
    return <tr key={client.id}>
      <td><input type="checkbox" /></td>
      <td>{client.hash}</td>
      <td>{client.num}</td>
      <td>{client.name}</td>
      <td>{client.date}</td>
      <td>{client.pay}</td>
      <td>{client.shipping}</td>
      <td>{client.total}</td>
      <td>{client.state}</td>
    </tr>
  })

  return (
    <div style={{ overflow: "auto" }}>
      <table className='table-dashboard table-main' >
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>#</th>
            <th>رقم الطلب</th>
            <th>اسم العميل</th>
            <th>تاريخ الطلب</th>
            <th>الدفع</th>
            <th>الشحن</th>
            <th>المجموع</th>
            <th>حالة الطلب</th>
          </tr>
        </thead>
        <tbody>
          {result}
          <tr>
            <td className='table-more' colSpan="9">
              <a href='#' >المزيد من الطلبات</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;
