import React from 'react'


const Subscribe = () => {
  return (
    <>
      <div className='info'>
        <h1>إشترك في نشرتنا الإخبارية</h1>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد.</p>
      </div>

      <form>
        <input type='email' placeholder='البريد الالتكروني' />
        <input type='submit' value='إرسال' />
      </form>
    </>
  )
}

export default Subscribe
