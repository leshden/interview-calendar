import {DraggableScrollContainer} from './DraggableScrollStyled';
import {useRef, useEffect} from 'react';
import { useDraggable } from "react-use-draggable-scroll";

const DraggableScroll = ({children, callbackOnScroll, curOffset = 0, offset = 0}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  useEffect(()=>{
    ref.current.scrollLeft = curOffset;
  }, [curOffset])

  useEffect(()=>{
    ref.current.scrollLeft = offset;
  }, [offset])

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
