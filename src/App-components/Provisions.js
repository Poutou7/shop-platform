import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/components/navigation/navigation.min.css'


// Images
import person1 from '../images/person1.jpeg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';
import person4 from '../images/person4.jpeg';
import person5 from '../images/person5.webp';
import person6 from '../images/person6.jpeg';



SwiperCore.use([Navigation]);

const Provisions = () => {


  const provisions = [
    {
      id: 1,
      name: "علي شاهين",
      job: "مدير متجر زادنا",
      img: person1,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.",
    },
    {
      id: 2,
      name: "أكرم سالم ",
      job: "مدير متجر الهاشمي",
      img: person2,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.",
    },
    {
      id: 3,
      name: "هشام لعراب ",
      job: "مدير شركة متاجر السعودية",
      img: person3,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.",
    },
    {
      id: 4,
      name: "أسماء شاهين",
      job: "مصممة أزياء",
      img: person4,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.",
    },
    {
      id: 6,
      name: "سفيان طاي",
      job: "مدير تنفيذي لشركة الالبسة",
      img: person6,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص",
    },
    {
      id: 5,
      name: "سعاد كرم",
      job: "مصممة ديكور",
      img: person5,
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص.",
    },
  ]


  const result = provisions.map((el) => {
    return <SwiperSlide key={el.id}>
      <img src={el.img} alt='NO' />
      <p>{el.text}</p>
      <h3>{el.name}</h3>
      <span>{el.job}</span>
    </SwiperSlide>
  })

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={true}
    >
      {result}
    </Swiper>
  )
}

export default Provisions
