import {CalendarPanelContainer, CalendarPanelDaysMonthContainer} from './CalendarPanelStyled';
import Fragment from 'react';
import MonthPanel from '../month-panel/MonthPanel';
import DaysPanel from '../days-panel/DaysPanel';

const CalendarPanel = () => {

  return (
      <CalendarPanelContainer role='section'>
        <CalendarPanelDaysMonthContainer>
          <DaysPanel />
          <MonthPanel />
        </CalendarPanelDaysMonthContainer>
      </CalendarPanelContainer>
  )
}

export default CalendarPanel;
