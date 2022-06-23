import {DaysPanelContainer, DaysPanelContainerScroll} from './DaysPanelScrollStyled';
import { useState } from "react";

const DaysPanelScroll = ({children}) => {

  const [offset, setOffset] = useState(0);
  const [curOffset, setCurOffset] = useState(0);
  const [clickPos, setClickPos] = useState({pos: 0, offset: 0});
  const [isDown, setIsDown] = useState(false);

  const mouseDown = (e) => {
    e.preventDefault();
    const offset = e.currentTarget.offsetLeft;
    const pos = e.clientX - offset;

    setClickPos({ pos: pos, offset: offset});
    setIsDown(true);
  }

  const mouseUp = (e) => {
    e.preventDefault();
    setIsDown(false);
    setCurOffset(offset);

  }

  const mouseMove = (e) => {
    e.preventDefault();
    if (!isDown) {
      return;
    }
    const movePos = curOffset + (e.clientX - clickPos.offset) - clickPos.pos;
    setOffset(movePos);
  }

  const mouseOut = (e) => {
    e.preventDefault();
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
        children
      }
    </DaysPanelContainerScroll>
    </DaysPanelContainer>
  );
}

export default DaysPanelScroll;
