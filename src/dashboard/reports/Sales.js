import React from 'react'
import Calendar from './Calendar'

const Sales = () => {

  let dateNow = new Date();
  const month = dateNow.getMonth();
  const dayToday = dateNow.getDate();


  return (
    <div className='sales'>
      <div className='datesales'>
        <div className='charts'></div>
        <Calendar month={month} dayToday={dayToday} />
      </div>
      <div className='sale'>
        <h3>المبيعات</h3>
        <ul>
          <li>
            <span>اجمالي المبيعات</span>
            <span>50</span>
          </li>
          <li>
            <span>تكاليف المنتجات</span>
            <span>50</span>
          </li>
          <li>
            <span>الشحن</span>
            <span>50</span>
          </li>
          <li>
            <span>رسوم الدفع الالكتروني</span>
            <span>50</span>
          </li>
        </ul>
        <div>
          <span>صافي المبيعات</span>
          <span>50</span>
        </div>
      </div>
    </div>
  )
}

export default Sales
