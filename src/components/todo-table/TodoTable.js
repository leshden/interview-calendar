import {TodoTableContainer, TodoTableMain, TodoTableContainerInner} from './TodoTableStyled';
import { useRef, useEffect, useState, useContext } from 'react';
import TodoTableHours from '../todo-table-hours/TodoTableHours';
import TodoTableRow from '../todo-table-row/TodoTableRow';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';


const TodoTable = () => {

  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const hours = Array.from(Array(24).keys());
  const [offsetTopScroll, setOffsetTopScroll] = useState(0);
  const {offset} = useContext(OffsetScrollContext);
  const [prevOffset, setPrevOffset] = useState(0);
  const [curOffset, setCurOffset] = useState(0);
  const ref = useRef();

  useEffect(()=>{
    const curOffset = ref.current.childNodes[1].offsetLeft - ref.current.childNodes[0].offsetLeft;
    setCurOffset(curOffset);
  }, [curOffset])

  const handleOnScroll = (e) => {

      setOffsetTopScroll(e.target.scrollTop);
      const offset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
      console.log(`scrollLeft: ${e.target.scrollLeft}`)
      console.log(`offset: ${offset}`);
      if (e.target.scrollLeft > offset) {
        const fArr = arr.slice(1);
        setArr([...fArr, count]);
        setCount(count + 1);
        e.target.scrollLeft = 0;
        console.log(`Count + ${count}`);
      }
      else if (e.target.scrollLeft == 0) {
        e.target.scrollLeft = offset;
        const fArr = arr.slice(0, -1);
        setArr([fArr[0] - 1, ...fArr]);
        setCount(count - 1);
        console.log(`Count - ${count}`);
      }
  }

  return (
    <TodoTableMain>
      <TodoTableHours offset={offsetTopScroll} hours = {hours}/>
      <DraggableScroll
        callbackOnScroll={handleOnScroll} curOffset={curOffset} offset={offset}>
        <TodoTableContainer ref={ref}>
          {
            arr.map((item, index) => {
              return(
                  <TodoTableRow key = {index} item={item} hours={hours} index={index}/>
              )
            })
          }
        </TodoTableContainer>
      </DraggableScroll>
    </TodoTableMain>
  );
}

export default TodoTable;
