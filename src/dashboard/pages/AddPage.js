import React from 'react'
import { useDispatch } from 'react-redux';
import { getaddPage } from "../../store/addItemSlice";


const AddPage = () => {
  const dispatch = useDispatch();

  return (
    <div className='show-add add-category'>
      <div className='head flex-between'>
        <div className='flex'>
          <i className="fa-solid fa-plus"></i>
          <span>اضافـة</span>
        </div>
        <i className="fa-solid fa-xmark" onClick={() => dispatch(getaddPage())}></i>
      </div>
      <form>
        <label>
          اسم الصفحة
          <input type="text" placeholder='اسم التصنيف' required />
        </label>
        <label>
          محتوى الصفحة
          <textarea placeholder='محتوى الصفحة'></textarea>
        </label>
        <input type="submit" value="حفـظ" />
      </form>
    </div>
  )
}

export default AddPage
