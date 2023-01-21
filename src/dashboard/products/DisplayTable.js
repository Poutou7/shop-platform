import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeDisplay } from '../../store/productSlice'

const DisplayTable = () => {

  const colorFormat = useSelector((state) => state.products.colorFormat);

  const dispatch = useDispatch();


  return (
    <div className="display-table flex">
      <span>شكل العرض</span>
      <i
        className={`fa-solid fa-bars bar ${colorFormat ? `specifie` : ``}`}
        onClick={(e) => dispatch(changeDisplay(e.target.id))}
        id="bar"
      ></i>
      <i
        className={`fa-solid fa-border-all ${colorFormat ? `` : `specifie`}`}
        onClick={(e) => dispatch(changeDisplay(e.target.id))}
        id="border"
      ></i>
    </div>
  )
}

export default DisplayTable;
