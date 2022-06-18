import {DaysPanelContainer} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const DaysPanel = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <DaysPanelContainer
      {...events}
      ref={ref}
    >
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
