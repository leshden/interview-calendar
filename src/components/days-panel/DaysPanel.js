import {DaysPanelContainer} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';

const DaysPanel = () => {

  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <DaysPanelContainer>
      {
        days.map(item => {
          return(
          <DayPanel key={item}/>
        );
       })
      }
    </DaysPanelContainer>
  );
}

export default DaysPanel;
