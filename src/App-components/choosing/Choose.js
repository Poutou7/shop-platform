import React from 'react'
import Box from './Box'

import './choose.css'

const Choose = () => {


  const text = 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.'
  const boxes = [
    {
      id: 1,
      icon: <i className="fa-solid fa-print"></i>,
      title: 'تقارير مفصلة لقياس أداء المتجر',
      txt: text,
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-pen-ruler"></i>,
      title: 'تصاميم احترافية تناسب ذوقك',
      txt: text,
    },
    {
      id: 3,
      icon: <i className="fa-regular fa-lightbulb"></i>,
      title: 'سهولة إدراج المنتجات وإدارة المخزون',
      txt: text,
    },
    {
      id: 4,
      icon: <i className="fa-solid fa-print"></i>,
      title: 'تقارير مفصلة لقياس أداء المتجر',
      txt: text,
    },
    {
      id: 5,
      icon: <i className="fa-solid fa-pen-ruler"></i>,
      title: 'تصاميم احترافية تناسب ذوقك',
      txt: text,
    },
    {
      id: 6,
      icon: <i className="fa-regular fa-lightbulb"></i>,
      title: 'سهولة إدراج المنتجات وإدارة المخزون',
      txt: text,
    },
  ]

  const result = boxes.map((box) => {
    return <Box
      key={box.id}
      id={box.id}
      icon={box.icon}
      title={box.title}
      txt={box.txt} />
  })
  return (
    <div className='choose'>
      <h1 className='title-head'>لماذا أختار تجربة ؟؟</h1>
      <div className='boxes grid-container'>
        {result}
      </div>
    </div>
  )
}

export default Choose
