//@flow
import * as React from 'react';
import {TodoTableCellStyled} from './TodoTableCellStyled';

type Props = {
  item: number,
  hour: number
}

const TodoTableCell = ({item, hour}:Props) : React.Node => {

  const handleClick = () => {
    console.log(`click cell H: ${hour}`);
  }

  return (
    <TodoTableCellStyled onClick={handleClick}>
      {item}
    </TodoTableCellStyled>
  )
}

export default TodoTableCell;
