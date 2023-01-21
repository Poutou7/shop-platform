import React from "react";
import BarMain from "../BarMain";

import "./contact.css";

const Contact = () => {
  const blogItems = [
    {
      id: 1,
      title: "تواصل معنا",
    },
  ];

  return (
    <div className="contact-us">
      <div className="main">
        <div className="container">
          <BarMain items={blogItems} />
          <div className="title">
            <h1>كيف يمكننا مساعدتك؟</h1>
          </div>
        </div>
      </div>
      <div className="contact-msg flex-between container content">
        <form>
          <h2>راسلنا</h2>
          <label>
            الاسم الأول
            <input type="text" placeholder="ادخل الاسم الأول.." />
          </label>
          <label>
            الاسم الأخير
            <input type="text" placeholder="ادخل الاسم الأخير.." />
          </label>
          <label>
            البريـد الإلكتروني
            <input type="email" placeholder="ادخل البريد الإلكتروني .." />
          </label>
          <label>
            رقم الهاتـف
            <input type="phone" placeholder="ادخل رقم الهاتف.." />
          </label>
          <label htmlFor="message">نص الرسالة</label>
          <textarea id="message" placeholder="ادخل نص الرسالة.."></textarea>
          <input type="submit" className="btn-alt-shape" value="إرســال" />
        </form>
        <div className="our-infos">
          <h2>تفاصيلنـا</h2>
          <div>
            <i className="fa-regular fa-envelope"></i>
            <span>البريـد الإلكتروني</span>
            <p>exemple@gmail.com</p>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>رقم الهاتـف</span>
            <p style={{ fontWeight: "700" }}>213 558 942 826+</p>
          </div>
          <div>
            <i className="fa-regular fa-clock"></i>
            <span>ساعات العمل</span>
            <p>Sunday to Thursday</p>
            <p className="time">
              am <span>05:00 - </span>
              pm <span>08:00</span>
            </p>
          </div>
          <div className="social flex">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
