import React from 'react'

const Article = ({ img }) => {
  return (
    <div className='article rad-10 p-10 border-eee'>
      <img src={img} alt="article" />
      <div>
        <span className='date'>22 أكتوبر 2022</span>
        <div>
          <h2>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص.</h2>
          <p> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
            هذا النص من مولد النص العربي, هذا النص أو
            العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة, لقد تم توليد هذا النص من مولد.</p>
          <div className='hints flex'>
            <span className='rad-5'>Future</span>
            <span className='rad-5'>CIO</span>
            <span className='rad-5'>App</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
