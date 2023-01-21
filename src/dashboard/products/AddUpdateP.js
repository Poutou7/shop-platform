import React from 'react'

import "./products.css";


const AddUpdateP = ({ title, value }) => {
  return (
    <div className='add-update-product'>
      <h1 className="title-dashboard">{title}</h1>
      <form>
        <div>
          <div className='part-one'>
            <label>
              اسم المنتج
              <input type="text" placeholder='اسم المنتج' />
            </label>
            <div className='code-product'>
              <label>
                رمز المنتج
                <input type="text" placeholder='رمز المنتج' />
              </label>
              <label>
                الكمية
                <input type="text" placeholder='الكمية المتوفرة المنتج' />
              </label>
              <label>
                وزن المنتج (kg)
                <input type="text" placeholder='وزن المنتج' />
              </label>
            </div>
            <label style={{ display: "block", marginTop: "53px" }}>
              التصنيف
              <input list="categories" name="categories" autoComplete="off" placeholder='اختر التصنيف' />
              <datalist id="categories">
                <option value='ورد بلاستيكي' ></option>
                <option value='ورد أصفر' />
                <option value='ورد مزركش' />
                <option value='ورد أحمر' />
                <option value='ورد زهري جميل' />
                <option value='ورد صناعي' />
              </datalist>
            </label>
            <label>
              وصف قصير للمنتج
              <input type="text" placeholder='وصف مختصر' />
            </label>
          </div>
          <div className='part-two'>
            <label>
              السعر
              <input type="text" placeholder='السعر' />
            </label>
            <label>
              التكلفة
              <input type="text" placeholder='التكلفة' />
            </label>
            <label className='requires-charging' htmlFor='check-shipping'>
              <input type="checkbox" id='check-shipping' />
              يتطلب شحن
            </label>
            <label>
              الشحن
              <input list="shipping" name="shipping-way" placeholder='اختر طريقة الشحن' />
              <datalist id="shipping">
                <option value='الشحن البحري' />
                <option value='الشحن الجوي' />
                <option value='الشحن البري' />
              </datalist>
            </label>
            <label className='custom-checkbox'>
              <input type="checkbox" className='custom-input' defaultChecked />
              <span > النشر على المتجر</span>
            </label>
          </div>
        </div>
        <div>
          <label>الوصـف</label>
          <textarea placeholder='الوصف'></textarea>
        </div>
        <label>الصورة</label>
        <label htmlFor="photo" className='photo'>
          <i className="fa-regular fa-image"></i>
          <p>اسحب واسقط الصورة هنا</p>
          <input type="file" id="photo" />
        </label>
        <input type="submit" value={value} />
        <input type="submit" value={value} />
      </form>
    </div>
  )
}

export default AddUpdateP
