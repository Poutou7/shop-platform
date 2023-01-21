import React from 'react'
import { NavLink } from 'react-router-dom';


const Contact = () => {
  return (
    <>
      <div className='info-contact'>
        <h2>منصة تجربة</h2>
        <h3 className='h3-cont'>التواصل</h3>
        <div className='phone'>
          <span>الهاتف:</span>
          <span>+213558942826</span>
        </div>
        <div className='adress'>
          <span>العنوان:</span>
          <span>شارع الاخوة بوزيدي المدية-الجزائر</span>
        </div>
        <div className='email'>
          <span>البريد الالكتروني:</span>
          <span>exemple@gmail.com</span>
        </div>
        <div className='social flex-between'>
          <a href='' alt='' ><i className="fa-brands fa-facebook-f"></i></a>
          <a href='' alt='' ><i className="fa-brands fa-twitter"></i></a>
          <a href='' alt='' ><i className="fa-brands fa-instagram"></i></a>
          <a href='' alt='' ><i className="fa-brands fa-linkedin-in"></i></a>
          <a href='' alt='' > <i className="fa-brands fa-behance"></i></a>
        </div>
      </div>

      <div>
        <h3>الصفحات</h3>
        <ul>
          <li><NavLink to="/" >الرئيسية</NavLink></li>
          <li><NavLink to="price" >الأسعار</NavLink></li>
          <li><NavLink to="blog" >المدونة</NavLink></li>
          <li><NavLink to="#" >تجربة الموقع</NavLink></li>
        </ul>
      </div>

      <div>
        <h3>المنصة</h3>
        <ul>
          <li><NavLink to="about" >حول المنصة</NavLink></li>
          <li><NavLink to="blog" >المدونة</NavLink></li>
          <li><NavLink to="contact" >تواصل معنا</NavLink></li>
        </ul>
      </div>

      <div>
        <h3>السياسات</h3>
        <ul>
          <li><NavLink to="" >شروط الخدمة</NavLink></li>
          <li><NavLink to="" >سياسة الخصوصية</NavLink></li>
          <li><NavLink to="" >الأمان</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Contact;