import {DraggableScrollContainer} from './DraggableScrollStyled';
import {useRef} from 'react';
import { useDraggable } from "react-use-draggable-scroll";

const DraggableScroll = ({children, callbackOnScroll}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  // useEffect(()=>{
  //   const curOffset = ref.current.firstChild.childNodes[1].offsetLeft - ref.current.firstChild.childNodes[0].offsetLeft;
  //   ref.current.scrollLeft = curOffset;
  // }, [])

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
