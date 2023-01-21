import React from "react";
import BarMain from "../BarMain";

import "./price.css";
import TD from "./TD";
import FooterPrice from "./FooterPrice";

const Price = () => {
  const blogItems = [
    {
      id: 1,
      title: "الأسعار",
    },
  ];

  return (
    <div className="price main">
      <div className="container">
        <BarMain items={blogItems} />
        <div className="title">
          <h1>أسعـار و مميـزات الباقـات</h1>
        </div>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th
                  style={{ color: "var(--second-color)", textAlign: "right" }}
                >
                  الباقات الشهرية
                </th>
                <th>
                  <span>الباقة الاولى</span>
                  <span>الاساسية</span>
                </th>
                <th>
                  <span>الباقة الثانية</span>
                  <span>الباقة المتقدمة</span>
                </th>
                <th>
                  <span>الباقة الثالثة</span>
                  <span>الباقة الاحترافية</span>
                </th>
              </tr>
              <tr style={{ color: "#f19e26" }}>
                <th style={{ color: "var(--base-color)", textAlign: "right" }}>
                  الاشتراك الشهري
                </th>
                <th>مجانا</th>
                <th>99$</th>
                <th>199$</th>
              </tr>
              <tr>
                <th colSpan={4} className="shopping">
                  التسويق
                </th>
              </tr>
            </thead>
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <tr>
              <th colSpan={4} className="shopping">
                التسويق
              </th>
            </tr>
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <tr>
              <th colSpan={4} className="shopping">
                التسويق
              </th>
            </tr>
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
            <tr>
              <th colSpan={4} className="shopping">
                التسويق
              </th>
            </tr>
            <TD txt="هذا النص هو مثال لنص" />
            <TD txt="هذا النص هو مثال لنص" />
          </table>
        </div>

        <FooterPrice />
      </div>
    </div>
  );
};

export default Price;

// <i class="fa-solid fa-circle-xmark"></i>

// <i class="fa-solid fa-circle-check"></i>
