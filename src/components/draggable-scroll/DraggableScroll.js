import {DraggableScrollContainer} from './DraggableScrollStyled';
import {useRef, useEffect} from 'react';
import { useDraggable } from "react-use-draggable-scroll";

const DraggableScroll = ({children, callbackOnScroll, curOffset = 0}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  useEffect(()=>{
    ref.current.scrollLeft = curOffset;
  }, [curOffset])

  const handleOnScroll = (e) => {
    callbackOnScroll(e);
  }

  return (
    <DraggableScrollContainer {...events} ref={ref} onScroll={handleOnScroll}>
      {children}
    </DraggableScrollContainer>
  )
}

export default DraggableScroll;
