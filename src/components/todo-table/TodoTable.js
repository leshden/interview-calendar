import {TodoTableContainer, TodoTableMain, TodoTableContainerInner} from './TodoTableStyled';
import { useRef, useEffect, useState, useContext } from 'react';
import TodoTableHours from '../todo-table-hours/TodoTableHours';
import TodoTableColumn from '../todo-table-column/TodoTableColumn';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';
import {GetArrayDays} from '../../utils/Utils';


const TodoTable = () => {

  const [count, setCount] = useState(10);
  const [arr, setArr] = useState(GetArrayDays());
  const hours = Array.from(Array(24).keys());
  const [offsetTopScroll, setOffsetTopScroll] = useState(0);
  const {refToDays, refToTable, isDayScroll, setDayScroll} = useContext(OffsetScrollContext);
  const [curOffset, setCurOffset] = useState(0);

  const days = arr.map((item, index) => {
    return item.getDate();
  });

  let isDisableHandleScroll = false;
  const disableHandleScroll = () => {
    isDisableHandleScroll = true;
  }

  useEffect(()=>{
    const curOffset = refToTable.current.firstChild.childNodes[1].offsetLeft - refToTable.current.firstChild.childNodes[0].offsetLeft;
    setCurOffset(curOffset);
  }, [curOffset])

  const handleOnScroll = (e) => {

      if (isDisableHandleScroll) {
        return;
      }

      if (!isDayScroll) {
        refToDays.current.scrollLeft = e.target.scrollLeft;
      }

      setOffsetTopScroll(e.target.scrollTop);

      const curOffset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
      if (e.target.scrollLeft > curOffset) {
        e.target.scrollLeft = 0;
        const fArr = arr.slice(1);
        let nextDate = new Date();
        nextDate.setDate(fArr[fArr.length - 1].getDate() + 1)
        setArr([...fArr, nextDate]);
        disableHandleScroll();
      }
      else if (e.target.scrollLeft === 0) {
        e.target.scrollLeft = curOffset;
        const fArr = arr.slice(0, -1);
        let prevDate = new Date();
        prevDate.setDate(fArr[0].getDate() - 1)
        setArr([prevDate, ...fArr]);
        disableHandleScroll();
      }
  }

  const mouseDown = (e) => {
    e.preventDefault();
    setDayScroll(false);
  }

  return (
    <TodoTableMain onMouseDown={mouseDown}>
      <TodoTableHours offset={offsetTopScroll} hours = {hours}/>
      <DraggableScroll
        callbackOnScroll={handleOnScroll} curOffset={curOffset} myRef={refToTable}>
        <TodoTableContainer>
          {
            days.map((item, index) => {
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
