import React from "react";

import "./about.css";

import about from "../images/about-us.jpg";
import work from "../images/our-work.jpg";

import BarMain from "../BarMain";
import Info from "./Info";
import Choose from "../../App-components/choosing/Choose";
import FooterPrice from "../price/FooterPrice";

const About = () => {
  const blogItems = [
    {
      id: 1,
      title: "جول المنصة",
    },
  ];

  return (
    <div className="about">
      <div className="main">
        <div className="container">
          <BarMain items={blogItems} />
          <div className="title">
            <h1>نحن نعمل على مدار 24 ساعة لراحتكم</h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
            </p>
          </div>
        </div>
      </div>

      <Info />

      <div className="we-are container content">
        <div className="flex">
          <div>
            <h2>من نحـن</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
            </p>
            <br />
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
            </p>
          </div>
          <img src={about} alt="we are .." />
        </div>
        <div className="flex" style={{ marginTop: "100px" }}>
          <img src={work} alt="we are .." />
          <div>
            <h2>مهمـتـنا</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل هذا النص أو
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد
              العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا النص من مولد.
            </p>
            <br />
            <p>
              هذا النص أو العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا
              النص من مولد. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة,
              لقد تم توليد هذا النص من مولد النص العربي, حيث يمكنك أن تولد مثل
              هذا النص أو العديد من النصوص.هذا النص المساحة, لقد تم توليد هذا
              النص من مولد.
            </p>
          </div>
        </div>
      </div>

      <div className="content container">
        <Choose />
        <FooterPrice />
      </div>
    </div>
  );
};

export default About;
