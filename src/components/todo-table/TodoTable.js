import {TodoTableContainer, TodoTableMain, TodoTableContainerInner} from './TodoTableStyled';
import { useDraggable } from "react-use-draggable-scroll";
import { useRef, useEffect, useState } from 'react';
import TodoTableHours from '../todo-table-hours/TodoTableHours';
import TodoTableRow from '../todo-table-row/TodoTableRow';


const TodoTable = () => {

  const ref = useRef();
  const { events } = useDraggable(ref);
  const [count, setCount] = useState(9);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const hours = Array.from(Array(24).keys());
  const [offsetTopScroll, setOffsetTopScroll] = useState(0);

  useEffect(()=>{
    const offset = ref.current.firstChild.childNodes[1].offsetLeft - ref.current.firstChild.childNodes[0].offsetLeft;
    ref.current.scrollLeft = offset;
  }, [])

  const handleOnScroll = (e) => {
      setOffsetTopScroll(e.target.scrollTop);
      const offset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
      if (e.target.scrollLeft > offset) {
        e.target.scrollLeft = 0;
        const fArr = arr.slice(1);
        setArr([...fArr, count]);
        setCount(count + 1);
      }
      else if (e.target.scrollLeft === 0) {
        e.target.scrollLeft = offset;
        const fArr = arr.slice(0, -1);
        setArr([fArr[0] - 1, ...fArr]);
        setCount(count - 1);
      }
  }

  return (
    <TodoTableMain>
      <TodoTableHours offset={offsetTopScroll} hours = {hours}/>
      <TodoTableContainer {...events} ref={ref} onScroll={handleOnScroll}>
        <TodoTableContainerInner>
          {
            arr.map((item, index) => {
              return(
                  <TodoTableRow key = {index} item={item} hours={hours} index={index}/>
              )
            })
          }
        </TodoTableContainerInner>
      </TodoTableContainer>
    </TodoTableMain>
  );
}

export default TodoTable;
