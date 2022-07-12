import {TodoTableContainer, TodoTableMain, TodoTableContainerInner} from './TodoTableStyled';
import { useRef, useEffect, useState, useContext } from 'react';
import TodoTableHours from '../todo-table-hours/TodoTableHours';
import TodoTableColumn from '../todo-table-column/TodoTableColumn';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';


const TodoTable = () => {

  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const hours = Array.from(Array(24).keys());
  const [offsetTopScroll, setOffsetTopScroll] = useState(0);
  const {refToDays, refToTable, isDayScroll, setDayScroll} = useContext(OffsetScrollContext);
  const [curOffset, setCurOffset] = useState(0);
  const ref = useRef();

  let isDisableHandleScroll = false;
  const disableHandleScroll = () => {
    isDisableHandleScroll = true;
  }

  const handleOnScroll = (e) => {

      if (isDisableHandleScroll) {
        return;
      }

      if (!isDayScroll) {
        refToDays.current.scrollLeft = e.target.scrollLeft;
      }

      setOffsetTopScroll(e.target.scrollTop);
      const offset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
      // console.log(`scrollLeft: ${e.target.scrollLeft}`)
      // console.log(`offset: ${offset}`);
      if (e.target.scrollLeft > offset) {
        const fArr = arr.slice(1);
        setArr([...fArr, count]);
        setCount(count + 1);
        e.target.scrollLeft = 0;
        disableHandleScroll();
        // console.log(`Count + ${count}`);
      }
      else if (e.target.scrollLeft == 0) {
        e.target.scrollLeft = offset;
        const fArr = arr.slice(0, -1);
        setArr([fArr[0] - 1, ...fArr]);
        setCount(count - 1);
        disableHandleScroll();
        // console.log(`Count - ${count}`);
      }
  }

  const mouseDown = (e) => {
    e.preventDefault();
    setDayScroll(false);
    console.log('Down!!');
  }

  return (
    <TodoTableMain onMouseDown={mouseDown}>
      <TodoTableHours offset={offsetTopScroll} hours = {hours}/>
      <DraggableScroll
        callbackOnScroll={handleOnScroll} curOffset={curOffset} myRef={refToTable}>
        <TodoTableContainer ref={ref}>
          {
            arr.map((item, index) => {
              return(
                  <TodoTableColumn key = {index} item={item} hours={hours} index={index}/>
              )
            })
          }
        </TodoTableContainer>
      </DraggableScroll>
    </TodoTableMain>
  );
}

export default TodoTable;
