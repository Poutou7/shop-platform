import React from 'react'

const Client = () => {

  const clients = [
    {
      id: 1,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 2,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 3,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 4,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 5,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 6,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 7,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
    {
      id: 8,
      name: "محمد علي الشحي",
      date: "0/10/2022",
      phone: "0558974112",
      email: "hichem@gmail.com",
      requests: "4",
    },
  ];


  const result = clients.map((item) => {
    return <tr key={item.id}>
      <td><input type="checkbox" /></td>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.requests}</td>
      <td>
        <div className='procedure'>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </td>
    </tr>
  })


  return (
    <div className='sales clients'>
      <div className='datesales'>
        <div className='sale client'>
          <h3>العملاء</h3>
          <ul>
            <li>
              <span> عدد العملاء</span>
              <span>50</span>
            </li>
            <li>
              <span>عدد العملاء الذين اشتروا أكثر من مرة</span>
              <span>50</span>
            </li>
          </ul>
        </div>
        <div className='dash'>
          <h4>حركة المرور حسب الموقع</h4>
          <div className='flex-between'>
            <ul>
              <li className='black'>
                <span>العراق</span>
                <span>38.6%</span>
              </li>
              <li className='purpul'>
                <span>العراق</span>
                <span>32.6%</span>
              </li>
              <li className='green'>
                <span>العراق</span>
                <span>22.5%</span>
              </li>
              <li className='blue'>
                <span>العراق</span>
                <span>8.1%</span>
              </li>
            </ul>
            <div className='round'>
              <span className='black'></span>
              <span className='purpul'></span>
              <span className='blue'></span>
              <span className='green'></span>
            </div>
          </div>
        </div>
      </div>
      <table className='table-dashboard table-main'>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>الاسم</th>
            <th>تاريخ التسجيل</th>
            <th>رقم الجوال</th>
            <th>البريد الالكتروني</th>
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

export default Client
