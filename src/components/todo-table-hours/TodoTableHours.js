//@flow
import * as React from 'react';
import {TodoTableHourItem, TodoTableHoursContainer} from './TodoTableHoursStyled';
import {useRef, useEffect} from 'react';

type Props = {
  offset: number,
  hours: Array<number>
}

const TodoTableHours = ({offset, hours} : Props) : React.Node => {

  const ref:  React.ElementRef<typeof TodoTableHoursContainer> = useRef();

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
