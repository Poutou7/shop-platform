import React, { useState } from 'react'
import Plan from './Plan'


const Plans = () => {

  const [pricePlan, getPricePlan] = useState("month");
  const [isActive, getIsActive] = useState({
    month: true,
    year: false
  });

  const plans = [
    {
      id: 1,
      title: 'ميني',
      priceMonth: "مجانا",
      priceYear: 20,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل']
    },
    {
      id: 2,
      title: 'برو',
      priceMonth: 39.99,
      priceYear: 54.99,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل']
    },
    {
      id: 3,
      title: 'بزنس',
      priceMonth: 149.99,
      priceYear: 99.99,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل'],
    },
  ]
  const result = plans.map((plan) => {

    return <Plan
      key={plan.id}
      title={plan.title}
      price={pricePlan === "month" ? plan.priceMonth : plan.priceYear}
      txt={plan.txt}
      features={plan.features}
      pack={pricePlan === "month" ? "شهر" : "سنة"}
    />
  })

  const monthly = () => {
    getPricePlan("month");
    getIsActive(() => {
      return { month: true, year: false }
    });
  }

  const yearly = () => {
    getPricePlan("year");
    getIsActive(() => {
      return { month: false, year: true }
    });
  }


  return (
    <div className='plans-comp'>
      <h1 className='title-head'>باقات تجربة</h1>
      <div>
        <span className='yearly' onClick={yearly}
          style={{
            borderBottomColor: isActive.year ? "var(--base-color)" : "#ccc",
            color: isActive.year ? "var(--base-color)" : "#ccc",
          }}
        >سنوي</span>
        <span className='monthly' onClick={monthly}
          style={{
            borderBottomColor: isActive.month ? "var(--base-color)" : "#ccc",
            color: isActive.month ? "var(--base-color)" : "#ccc",
          }}
        >شهري</span>
      </div>

      <div className='grid-container plans'>
        {result}
      </div>
    </div>
  )
}

export default Plans
