import React from 'react'
import { useDispatch } from 'react-redux';
import { getaddClient } from '../../store/addItemSlice';

const AddCustomer = () => {

  const dispatch = useDispatch();

  return (
    <div className='show-add add-client'>
      <div className='head flex-between'>
        <div className='flex'>
          <i className="fa-solid fa-plus"></i>
          <span>اضافـة</span>
        </div>
        <i className="fa-solid fa-xmark" onClick={() => dispatch(getaddClient())}></i>
      </div>
      <form>
        <div>
          <div className='part-one'>
            <label>
              الاسم
              <input type="text" placeholder='الاسم' />
            </label>
            <label>
              رقم الجوال
              <input type="text" placeholder='رقم الجوال' />
            </label>
            <label>
              المدينة
              <input type="text" placeholder='اختر المدينة' list="city" />
              <datalist id="city">
                <option value="Algeria" />
                <option value="Saudi-Arebia" />
                <option value="Marocco" />
                <option value="Tuninia" />
                <option value="Lybia" />
                <option value="Iraq" />
              </datalist>
            </label>
          </div>
          <div className='part-two'>
            <label>
              البريد الالكتروني
              <input type="email" placeholder='البريد الالكتروني' />
            </label>
            <label>
              تاريخ الميلاد
              <input type="date" placeholder='تاريخ الميلاد' />
            </label>
            <label>
              الجنس
              <select name="sex">
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </label>
          </div>
        </div>
        <label>
          ملاحظات
          <textarea placeholder="اكتب ملاحظاتك" />
        </label>
        <input type="submit" value="حفـظ" />
      </form>
    </div>
  )
}

export default AddCustomer
