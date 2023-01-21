import React from 'react'
import { useDispatch } from 'react-redux';
import { getaddCategory } from "../../store/addItemSlice";

const AddCategory = () => {

  const dispatch = useDispatch();

  return (
    <div className='show-add add-category'>
      <div className='head flex-between'>
        <div className='flex'>
          <i className="fa-solid fa-plus"></i>
          <span>اضافـة</span>
        </div>
        <i className="fa-solid fa-xmark" onClick={() => dispatch(getaddCategory())}></i>
      </div>
      <form>
        <label>
          اسم التصنيف
          <input type="text" placeholder='اسم التصنيف' />
        </label>
        <label>
          حالة التصنيف
          <input type="text" placeholder='اختر حالة التصنيف' list="category" />
          <datalist id="category">
            <option value="category1" />
            <option value="category2" />
            <option value="category3" />
            <option value="category4" />
            <option value="category5" />
            <option value="category6" />
          </datalist>
        </label>
        <input type="submit" value="حفـظ" />
      </form>
    </div>
  )
}

export default AddCategory
