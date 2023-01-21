import React from 'react'

import './previews.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/components/navigation/navigation.min.css'


import img2 from '../../images/landing-shop2.webp';
import img3 from '../../images/landing-shop3.jpg';
import img4 from '../../images/landing-shop4.jpg';
import img5 from '../../images/landing-shop5.jpg';
import img6 from '../../images/landing-shop6.jpg';


SwiperCore.use([Navigation]);



const Previews = () => {


  const images = [
    {
      id: 2,
      name: "متجر زادنا",
      img: img6,
    },
    {
      id: 3,
      name: "متجر العيلة",
      img: img3,
    },
    {
      id: 4,
      name: "متجر الهاشمي",
      img: img4,
    },
    {
      id: 5,
      name: "متجر الرحاب",
      img: img5,
    },
    {
      id: 6,
      name: "متجر الزاد",
      img: img2,
    },
    {
      id: 7,
      name: "متجر الهاشمي",
      img: img4,
    },
    {
      id: 8,
      name: "متجر زادنا",
      img: img6,
    },
  ]

  const result = images.map((image) => {
    return <SwiperSlide key={image.id}>
      <img src={image.img} alt='NO' />
      <a href="#" target="_blank" >عرض التفاصيل</a>
      <p>{image.name}</p>
    </SwiperSlide>
  })

  return (
    <div className='content previews'>
      <h1 className='title-head'>شركائنا في النجاح</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
      >
        {result}
      </Swiper>
    </div>

  )
}

export default Previews
