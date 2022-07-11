import {DraggableScrollContainer} from './DraggableScrollStyled';
import {useRef, useEffect, useContext} from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import OffsetScrollContext from '../../contexts/OffsetScrollContext';

const DraggableScroll = ({children, callbackOnScroll, curOffset = 0, offset = 0, myRef}) => {
  // const ref = useRef();

  // const {tableScrollRef} = useContext(OffsetScrollContext);
  const { events } = useDraggable(myRef);
  // useEffect(()=>{
  //   ref.current.scrollLeft = curOffset;
  // }, [curOffset])
  //
  // useEffect(()=>{
  //   ref.current.scrollLeft = offset;
  // }, [offset])

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
