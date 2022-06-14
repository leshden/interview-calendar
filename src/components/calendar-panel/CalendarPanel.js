import './CalendarPanel.css';
import Fragment from 'react';
import MonthPanel from '../month-panel/MonthPanel';

const CalendarPanel = () => {

  return (
      <div className='calendar-panel-container'>
        <div className='emptyHoursBlock' />

        <div className='calendar-days-container'>
          <div className='row-days-symbols-container'>
            <div> M </div>
            <div> T </div>
            <div> W </div>
            <div> T </div>
            <div> F </div>
            <div> S </div>
            <div> S </div>
          </div>
          <div className='row-days-numbers-container'>
            <div> 1 </div>
            <div> 2 </div>
            <div> 3 </div>
            <div> 4 </div>
            <div> 5 </div>
            <div> 6 </div>
            <div> 7 </div>
          </div>
          <MonthPanel />
        </div>
      </div>


  )
}

export default CalendarPanel;
