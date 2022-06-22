import {DaysPanelContainer, DaysPanelContainerScroll} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';
import { useState } from "react";

const DaysPanel = () => {

  const [offset, setOffset] = useState(0);
  const [curOffset, setCurOffset] = useState(0);
  const [clickPos, setClickPos] = useState({pos: 0, offset: 0});
  const [isDown, setIsDown] = useState(false);

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const mouseDown = (e) => {

    const offset = e.currentTarget.offsetLeft;
    const pos = e.clientX - offset;
    
    setClickPos({ pos: pos, offset: offset});
    setIsDown(true);
  }

  const mouseUp = () => {
    setIsDown(false);
    setCurOffset(offset);

  }

  const mouseMove = (e) => {
    if (!isDown) {
      return;
    }
    const movePos = curOffset + (e.clientX - clickPos.offset) - clickPos.pos;
    setOffset(movePos);
  }

  const mouseOut = () => {
    setIsDown(false);
    setCurOffset(offset);
  }

  return (
    <DaysPanelContainer>
    <DaysPanelContainerScroll offset={offset}
                              onMouseUp={mouseUp}
                              onMouseDown={mouseDown}
                              onMouseMove={mouseMove}
                              onMouseOut ={mouseOut}>
      {
        days.map(item => {
          return(
          <DayPanel key={item}/>
        );
       })
      }
    </DaysPanelContainerScroll>
    </DaysPanelContainer>
  );
}

export default DaysPanel;
