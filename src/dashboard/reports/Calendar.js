import React from 'react'

const Calendar = ({ month, dayToday }) => {



  let monthString;
  let daysNumber;

  switch (month) {
    case 0:
      monthString = "January";
      daysNumber = 31;
      break;
    case 1:
      monthString = "Febuary";
      daysNumber = 28;
      break;
    case 2:
      monthString = "March";
      daysNumber = 31;
      break;
    case 3:
      monthString = "April";
      daysNumber = 30;
      break;
    case 4:
      monthString = "May";
      daysNumber = 31;
      break;
    case 5:
      monthString = "June";
      daysNumber = 30;
      break;
    case 6:
      monthString = "July";
      daysNumber = 31;
      break;
    case 7:
      monthString = "August";
      daysNumber = 31;
      break;
    case 8:
      monthString = "September";
      daysNumber = 30;
      break;
    case 9:
      monthString = "October";
      daysNumber = 31;
      break;
    case 10:
      monthString = "November";
      daysNumber = 30;
      break;
    case 11:
      monthString = "December";
      daysNumber = 31;
      break;
    default:
      break;
  }

  const arrayOfDays = [...Array(daysNumber).keys()];

  const resultDays = arrayOfDays.map((el, index) => {
    return <li key={index} className={(el + 1) === dayToday ? "active" : ""}>{el + 1}</li>
  })

  return (
    <div className='calendar'>
      <h4>{monthString}</h4>
      <ul className='weekdays'>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>
      <ul className='days'>
        {resultDays}
      </ul>
    </div>
  )
}

export default Calendar
