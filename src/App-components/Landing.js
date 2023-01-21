import React from 'react'
import { useNavigate } from 'react-router-dom'

import shop from '../../src/images/shop.webp'
import Button from '../components/Button'


const Landing = () => {

  const navigate = useNavigate();

  const startNow = () => {
    navigate("shop/create-store");
  }
  return (
    <>
      <div className='info'>
        <h1>منصة تجربة</h1>
        <p>تحول إلى التجارة الإلكترونية بسهولة و سرعة و أمتلك متجر إلكتروني خاص بك بجميع مزايا التجارة الإلكترونية مع توفير الخدمات المساندة له</p>
        <Button value='إبدأ الان' onClick={startNow} />
      </div>
      <div className='image'>
        <img src={shop} alt='shopImage' />
      </div>
    </>
  )
}

export default Landing
