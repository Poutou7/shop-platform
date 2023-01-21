import React from 'react'

const AddRequests = () => {
  return <div className='add-update-product'>
    <h1 className="title-dashboard">اضافة طلب</h1>
    <form>
      <div>
        <div className='part-one'>
          <div className='client-product'>
            <label>
              اسم المنتج
              <input type="text" placeholder='اسم المنتج' />
            </label>
            <label>
              اسم العميل
              <input type="text" placeholder='اسم العميل' />
            </label>
          </div>
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
              السعر
              <input type="text" placeholder='السعر' />
            </label>
          </div>
          <label style={{ display: "block", marginTop: "49px" }}>
            تاريخ الطلب
            <input type="date" placeholder='تاريخ الطلب' />
          </label>
          <label>
            حالة الطلب
            <select name="state">
              <option value="مسلم">مسلم</option>
              <option value="غير مسلم">غير مسلم</option>
            </select>
          </label>
        </div>
        <div className='part-two'>
          <label>
            المجموع
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
          <label>
            الدفع
            <input list="paying" name="shipping-way" placeholder='اختر طريقة الدفع' />
            <datalist id="paying">
              <option value='الدفع النقدي' />
              <option value='الدفع عن طريق شيكات' />
              <option value='الدفع ببطاقة الائتمان' />
              <option value='التحويل البنكي الالكتروني' />
            </datalist>
          </label>
        </div>
      </div>
      <input type="submit" value="اضافة" />
    </form>
  </div>
}

export default AddRequests
