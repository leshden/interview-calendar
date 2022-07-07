import {TodoTableContainer, TodoTableMain, TodoTableContainerInner} from './TodoTableStyled';
import { useRef, useEffect, useState, useContext } from 'react';
import TodoTableHours from '../todo-table-hours/TodoTableHours';
import TodoTableRow from '../todo-table-row/TodoTableRow';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';


const TodoTable = () => {

  const [count, setCount] = useState(9);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const hours = Array.from(Array(24).keys());
  const [offsetTopScroll, setOffsetTopScroll] = useState(0);
  const {offset} = useContext(OffsetScrollContext);

  // useEffect(()=>{
  //   const curOffset = ref.current.firstChild.childNodes[1].offsetLeft - ref.current.firstChild.childNodes[0].offsetLeft;
  //   ref.current.scrollLeft = curOffset;
  // }, [])

  useEffect(()=>{
     // ref.current.scrollLeft = offset;
    // handleScroll(ref.current);
  }, [offset])

  const handleScroll = (refToScroll) => {
    setOffsetTopScroll(refToScroll.scrollTop);
    const offset = refToScroll.firstChild.childNodes[1].offsetLeft - refToScroll.firstChild.childNodes[0].offsetLeft;
    if (refToScroll.scrollLeft > offset) {
      refToScroll.scrollLeft = 0;
      const fArr = arr.slice(1);
      setArr([...fArr, count]);
      setCount(count + 1);
    }
    else if (refToScroll.scrollLeft === 0) {
      refToScroll.scrollLeft = offset;
      const fArr = arr.slice(0, -1);
      setArr([fArr[0] - 1, ...fArr]);
      setCount(count - 1);
    }
  }

  const handleOnScroll = (e) => {
      handleScroll(e.target);
      /*
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
      */
  }

  return (
    <TodoTableMain>
      <TodoTableHours offset={offsetTopScroll} hours = {hours}/>
      <DraggableScroll
        callbackOnScroll={handleOnScroll}>
        <TodoTableContainerInner>
          {
            arr.map((item, index) => {
              return(
                  <TodoTableRow key = {index} item={item} hours={hours} index={index}/>
              )
            })
          }
        </TodoTableContainerInner>
      </DraggableScroll>
    </TodoTableMain>
  );
}

export default TodoTable;
