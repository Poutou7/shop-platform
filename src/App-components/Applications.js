import React from 'react'


const Applications = () => {
  return (
    <>
      <div>
        <h2>احصل على تطبيق تجربة اﻵن</h2>
        <p>تطبيق سلة للتاجر متوفر على متجر التطبيقات</p>
      </div>
      <div className='flex' style={{ gap: "20px" }}>
        <a href="#" className='store flex'>
          <div>
            <span>GET IT ON</span>
            <span>Google Play</span>
          </div>
          <i className="fa-brands fa-google-play"></i>
        </a>
        <a href="#" className='store flex'>
          <div>
            <span>Download on the</span>
            <span>App Store</span>
          </div>
          <i className="fa-brands fa-apple"></i>
        </a>
      </div>
    </>
  )
}

export default Applications
