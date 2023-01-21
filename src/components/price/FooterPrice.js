import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button'

import arrow1 from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";

const FooterPrice = () => {

  const navigate = useNavigate();

  const startNow = () => {
    navigate("/shop/create-store");
  }


  return (
    <div className="footer-price">
      <h2>ابدأ رحلة النجاح مع تجربة مجانا</h2>
      <p>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا
        النص من مولد النص العربي, أو العديد لقد تم توليد هذا النص من مولد.
      </p>
      <Button value="إبدأ الان مجاناً" onClick={startNow} />
      <img className="img1" src={arrow1} alt="arrow" />
      <img className="img2" src={arrow2} alt="arrow" />
    </div>
  )
}

export default FooterPrice
