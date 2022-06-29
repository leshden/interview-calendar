import {TodoTableHourItem, TodoTableHoursContainer} from './TodoTableHoursStyled';
import {useRef, useEffect} from 'react';

const TodoTableHours = ({offset, hours}) => {

  const ref = useRef();

  useEffect(()=>{
    ref.current.scrollTop = offset;
  }, [offset]);

  return(

      <TodoTableHoursContainer ref={ref}>
      {
        hours.map((item, index) => {
          return (
            <TodoTableHourItem key={index}>
              {item + ':00'}
            </TodoTableHourItem>
          )
        })
      }
      </TodoTableHoursContainer>

  )
}

export default TodoTableHours;