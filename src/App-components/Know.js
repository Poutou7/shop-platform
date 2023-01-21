import React from 'react'


const Know = () => {
  return (
    <div className='know flex'>
      <h2>إحصائيات مستخدمين منصة تجربة</h2>
      <div className='group flex'>
        <div className='box rad-10 border-eee flex'>
          <i className="fa-solid fa-store"></i>
          <div>
            <span>متجر إلتكروني</span>
            <span>1.8 ألف</span>
          </div>
        </div>
        <div className='box rad-10 border-eee flex'>
          <i className="fa-solid fa-store"></i>
          <div>
            <span> مستخدم المنصة</span>
            <span>14 ألف</span>
          </div>
        </div>
        <div className='box rad-10 border-eee flex'>
          <i className="fa-solid fa-store"></i>
          <div>
            <span> مبيعات المنصة</span>
            <span>1.3 مليون</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Know
