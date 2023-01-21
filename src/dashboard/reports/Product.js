import React from 'react'
import Calendar from './Calendar';

const Products = () => {

  let dateNow = new Date();
  const month = dateNow.getMonth();
  const dayToday = dateNow.getDate();


  return (
    <div className='products sales'>
      <div className='datesales'>
        <div className='sale product'>
          <h3>المنتجات</h3>
          <ul>
            <li>
              <span>اجمالي عدد المنتجات</span>
              <span>50</span>
            </li>
            <li>
              <span>تكاليف المنتجات</span>
              <span>50</span>
            </li>
          </ul>
          <div>
            <span>صافي المبيعات</span>
            <span>50</span>
          </div>
        </div>
        <Calendar month={month} dayToday={dayToday} />
      </div>
    </div>
  )
}

export default Products
