import React from 'react'

const Step = ({ changeShowStep, showStep }) => {

  return (
    <div onClick={changeShowStep} className="steps">
      <i className="fa-solid fa-ellipsis-vertical"></i>
      {showStep && (
        <div className='display-step'>
          <span>
            <i className="fa-regular fa-eye"></i>
            عرض
          </span>
          <span>
            <i className="fa-regular fa-pen-to-square"></i>
            تعديل
          </span>
          <span>
            <i className="fa-regular fa-trash-can"></i>
            حذف
          </span>
        </div>
      )}
    </div>
  )
}

export default Step
