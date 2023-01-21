import React from 'react'
import person from "../images/logo-person.jpeg";

const FormAccount = ({ title, label1, label2, label3, type, val1, val2, val3 }) => {
  return (
    <>
      <h1 className="title-dashboard">{title}</h1>
      <div>
        <div className="logo person">
          <img src={person} alt="person" />
          <div>
            <i className="fa-solid fa-camera-rotate"></i>
          </div>
        </div>
        <form>
          <label>
            {label1}
            <input type={type} value={val1} />
          </label>
          <label>
            {label2}
            <input type={type} value={val2} />
          </label>
          <label>
            {label3}
            <input type={type} value={val3} />
          </label>
          <input type="submit" value="حفظ" />
        </form>
      </div>
    </>
  )
}

export default FormAccount
