import './CalendarPanel.css';
import Fragment from 'react';

const CalendarPanel = () => {
  return (
      <div className='calendar-days-container'>
        <div className='days-symbols'>
          M T W T F S S
        </div>
        <div className='days-numbers'>
          1 2 3 4 5 6 7
        </div>
      </div>
  )
}

export default CalendarPanel;
