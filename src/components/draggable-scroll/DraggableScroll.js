import {useRef} from 'react';
import { useDraggable } from "react-use-draggable-scroll";

const DraggableScroll = ({children, callbackOnScroll}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const handleOnScroll = (e) => {
    callbackOnScroll(e);
  }

  return (
    <div style={{ width: '90%', height: '100%', overflow: 'hidden' }} {...events} ref={ref} onScroll={handleOnScroll}>
      {children}
    </div>
  )
}

export default DraggableScroll;
