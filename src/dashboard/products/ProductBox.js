import React, { useState } from 'react'

import img from '../images/products.jpg'

const ProductBox = ({ itemsProducts }) => {

  const [showStep, getShowStep] = useState(false);

  const showProcedure = () => {
    getShowStep(!showStep);
  };


  const allItems = itemsProducts.map((item) => {

    let classPublish = "";
    if (item.publish === "منشور") {
      classPublish = "published";
    } else {
      classPublish = "closed";
    }

    return (
      <div className='products-box' key={item.id}>
        <div className='photo'>
          <img src={img} alt="product" />
          <div className='flex-between'>
            <span className={classPublish}>{item.publish}</span>
            <div className='procedure' onClick={showProcedure}>
              <i className="fa-solid fa-ellipsis-vertical grid"></i>
            </div>
          </div>
        </div>
        <div className='info-product flex'>
          <div>
            <span>الرمز :</span>
            <p>{item.codeP}</p>
          </div>
          <div>
            <span>اسم المنتج :</span>
            <p>{item.name}</p>
          </div>
          <div>
            <span>التصنيف :</span>
            <p>{item.category}</p>
          </div>
          <div>
            <span>الكمية :</span>
            <p>{item.Qt}</p>
          </div>
          <div>
            <span>السعر :</span>
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="grid-container">
      {allItems}
    </div>
  )
}

export default ProductBox
