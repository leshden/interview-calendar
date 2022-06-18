import {useState} from 'react';
import {MonthPanelContainer, Button} from './MonthPanelStyled';

const MonthPanel = () => {
  const [date, setDate] = useState(new Date());
  const monthYearStr = date.toLocaleString('en-US', { year: 'numeric', month: 'long'});

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    console.log('next month');
  }

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    console.log('prev month');
  }

  return(
    <MonthPanelContainer>
      <Button className='button-change-month' onClick={prevMonth}>&#10094;</Button>
      <div>{monthYearStr}</div>
      <Button className='button-change-month' onClick={nextMonth}>&#10095;</Button>
    </MonthPanelContainer>
  );
}

export default MonthPanel;
