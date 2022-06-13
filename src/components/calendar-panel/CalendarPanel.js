import './CalendarPanel.css';
import Fragment from 'react';

const CalendarPanel = () => {
  return (
      <div className='calendar-days-container'>
        <div className='row-days-symbols'>
          M T W T F S S
        </div>
        <div className='row-days-numbers'>
          1 2 3 4 5 6 7
        </div>
        <div className='row-month-year-container'>
          <button>&#10094;</button>
          <div>March 2019</div>
          <button>&#10095;</button>
        </div>
      </div>
  )
}

export default CalendarPanel;
