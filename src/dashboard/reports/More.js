import React from 'react'

const More = () => {


  const clients = [
    {
      id: 1,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 2,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 3,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 4,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 5,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 6,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 7,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
    {
      id: 8,
      num: "001234",
      name: "محمد علي الشحي",
      code: "788888888",
      qt: "50",
      price: "50",
      numbers: "300",
    },
  ];


  const result = clients.map((item) => {
    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.num}</td>
      <td>{item.name}</td>
      <td>{item.code}</td>
      <td>{item.qt}</td>
      <td>{item.price}</td>
      <td>{item.numbers}</td>
      <td>
        <div className='procedure'>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </td>
    </tr>
  })

  return (
    <div style={{ overflow: "auto" }}>
      <h3>الأكثر طلبا</h3>
      <table className='table-dashboard table-main' style={{ marginTop: "30px" }}>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>المنتج</th>
            <th>الاسم</th>
            <th>رمز المنتج</th>
            <th>الكمية</th>
            <th>السعر</th>
            <th>عدد الطلبات</th>
            <th>اجراءات</th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    </div>
  )
}

export default More
