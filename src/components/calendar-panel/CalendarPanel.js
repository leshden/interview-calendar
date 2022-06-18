import './CalendarPanel.css';
import Fragment from 'react';
import MonthPanel from '../month-panel/MonthPanel';
import DaysPanel from '../days-panel/DaysPanel';

const CalendarPanel = () => {

  return (
      <div className='calendar-panel-container'>
        <div className='emptyHoursBlock' />

        <div className='calendar-days-container'>
          <DaysPanel />
          <MonthPanel />
        </div>
      </div>
  )
}

export default CalendarPanel;
