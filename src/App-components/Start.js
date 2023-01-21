import React from 'react'
import video from '../../src/images/video1.jpg'

const Start = () => {
  return (
    <div className='start flex'>
      <div className='video rad-20'>
        <i className="fa-solid fa-play"></i>
        <img src={video} alt='' />
      </div>
      <div className='info'>
        <h1 className='title-head'>تعرف على منصة تجربة و إبدأ تجاربك معنا</h1>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.</p>
        <div className='social flex'>
          <span>تابعنا على</span>
          <a href='#' >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href='#' >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href='#' >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href='#' >
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Start;