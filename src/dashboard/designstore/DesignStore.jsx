import React from "react";
import "./designStore.css";

import img1 from "../images/store1.png";
import img2 from "../images/store2.jpg";
import img3 from "../images/store3.jpg";

/** Swiper **/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const DesignStore = () => {
  const images = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ];

  const result1 = images.map((image) => {
    return (
      <SwiperSlide key={image.id}>
        <img src={image.img} alt="" />
        <a href="#" target="_blank">
          معاينة
        </a>
      </SwiperSlide>
    );
  });

  const result2 = images.map((image) => {
    return (
      <SwiperSlide key={image.id}>
        <img src={image.img} alt="" />
        <div className="info-store">
          <span className="name">اسم القالب</span>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span style={{ color: "#888" }}>(4.9)</span>
          </div>
          <span className="price">
            120 <span>USD</span>
          </span>
          <div className="links flex-between">
            <button>شراء</button>
            <a href="#" target="_blank">
              معاينة
            </a>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="design-store">
      <h1 className="title-dashboard">تصميم المتجر</h1>
      <div className="template template1">
        <h1 className="title-dashboard">القوالب المتاحة</h1>
        <Swiper spaceBetween={40} slidesPerView={3}>
          {result1}
        </Swiper>
      </div>
      <div className="template template2">
        <h1 className="title-dashboard">القوالب المتوفرة</h1>
        <Swiper spaceBetween={40} slidesPerView={3}>
          {result2}
        </Swiper>
      </div>
    </div>
  );
};

export default DesignStore;
