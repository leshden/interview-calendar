import './MonthPanel.css';
import {useState} from 'react';

const MonthPanel = () => {
  const [date, setDate] = useState(new Date());
  const monthYearStr = date.toLocaleString('en-US', { year: 'numeric', month: 'long'});

  const nextMonth = () => {
    console.log('next month');
  }
  const prevMonth = () => {
    console.log('prev month');
  }

  return(
    <div className='row-month-year-container'>
      <button className='button-change-month' onClick={prevMonth}>&#10094;</button>
      <div>{monthYearStr}</div>
      <button className='button-change-month' onClick={nextMonth}>&#10095;</button>
    </div>
  );
}

export default MonthPanel;
