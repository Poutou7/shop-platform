import React from "react";
import BarMain from "../BarMain";
import Article from "./Article";

import "./blog.css";

// Images
import img1 from "../images/article1.jpg";
import img2 from "../images/article2.jpg";
import img3 from "../images/article3.jpg";
import img4 from "../images/article4.jpg";
import img5 from "../images/article5.jpg";
import img6 from "../images/article6.jpg";

const Blog = () => {
  const blogItems = [
    {
      id: 1,
      title: "المدونة",
    },
  ];

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
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];

  const result = images.map((image) => {
    return <Article key={image.id} img={image.img} />;
  });
  return (
    <div>
      <div className="main">
        <div className="container">
          <BarMain items={blogItems} />
          <div className="title">
            <h1>اكتشف أشياء جديدة مع مدونة تجربة</h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص.هذا النص هو مثال لنص يمكن أن يستبدل في نفس
              المساحة, لقد تم توليد هذا النص من مولد.
            </p>
          </div>
        </div>
      </div>
      <article>
        <div className="container flex">{result}</div>
        <a href="#" className="more-articles btn-alt-shape rad-5">
          المزيـد من المـقالات
        </a>
      </article>
    </div>
  );
};

export default Blog;
