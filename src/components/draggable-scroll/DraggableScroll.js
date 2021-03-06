import {DraggableScrollContainer} from './DraggableScrollStyled';
import {useRef, useEffect, useContext} from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import OffsetScrollContext from '../../contexts/OffsetScrollContext';

const DraggableScroll = ({children, callbackOnScroll, curOffset = 0, myRef}) => {

  const { events } = useDraggable(myRef);
  useEffect(()=>{
    myRef.current.scrollLeft = curOffset;
  }, [curOffset])

  const handleOnScroll = (e) => {
    callbackOnScroll(e);
  }

  return (
    <DraggableScrollContainer {...events} ref={myRef} onScroll={handleOnScroll}>
      {children}
    </DraggableScrollContainer>
  )
}

export default DraggableScroll;
