//@flow
import * as React from 'react';
import {CalendarPanelContainer, CalendarPanelDaysMonthContainer} from './CalendarPanelStyled';
import MonthPanel from '../month-panel/MonthPanel';
import DaysPanel from '../days-panel/DaysPanel';

const CalendarPanel = () : React.Node => {

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
