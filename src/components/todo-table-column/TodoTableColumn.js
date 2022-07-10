//@flow
import * as React from 'react';
import {TodoTableColumnContainer} from './TodoTableColumnStyled';
import TodoTableCell from '../todo-table-cell/TodoTableCell';

type Props = {
  hours: Array<number>,
  index: number,
  item: number
}

const TodoTableColumn = ({hours, index, item}: Props) : React.Node => {
  return (
    <TodoTableColumnContainer key = {index}>
      {
        hours.map((it, indexH) => {
          return(
            <TodoTableCell key={index.toString() + indexH.toString()} item={item} />
          )
        })
      }

    </TodoTableColumnContainer>
  );
}

export default TodoTableColumn;
