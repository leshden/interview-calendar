//@flow
import * as React from 'react';
import {MonthPanelContainer, Button} from './MonthPanelStyled';

const MonthPanel = () : React.Node => {
  const [date, setDate] = React.useState(new Date());
  const monthYearStr = date.toLocaleString('en-US', { year: 'numeric', month: 'long'});

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  return(
    <MonthPanelContainer>
      <Button className='button-change-month' onClick={prevMonth}>&#10094;</Button>
      <p>{monthYearStr}</p>
      <Button className='button-change-month' onClick={nextMonth}>&#10095;</Button>
    </MonthPanelContainer>
  );
}

export default MonthPanel;
