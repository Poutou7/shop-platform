import React from 'react'

import main from "../images/main.jpg";

const Info = () => {
  return (
    <div>
      <div className="info-numbers">
        <img src={main} alt="about" />
        <div className="container">
          <h2>نحن نقدم خدمات تضمن نجاحك</h2>
          <div className="flex infos">
            <div className="info">
              <span className="number">390</span>
              <span className="data">متجر إلكتروني</span>
            </div>
            <div className="info">
              <span className="number">834+</span>
              <span className="data">مستخدم للمنصة</span>
            </div>
            <div className="info">
              <span className="number">1830+</span>
              <span className="data">مبيعات المنصة</span>
            </div>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
