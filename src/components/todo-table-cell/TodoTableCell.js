//@flow
import * as React from 'react';
import {TodoTableCellStyled} from './TodoTableCellStyled';

type Props = {
  item: number
}

const TodoTableCell = ({item}:Props) : React.Node => {
  return (
    <TodoTableCellStyled>
      {item}
    </TodoTableCellStyled>
  )
}

export default TodoTableCell;
