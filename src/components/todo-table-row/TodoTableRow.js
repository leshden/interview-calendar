import {TodoTableRowContainer} from './TodoTableRowStyled';
import TodoTableCell from '../todo-table-cell/TodoTableCell';

const TodoTableRow = ({hours, index, item}) => {
  return (
    <TodoTableRowContainer key = {index}>
      {
        hours.map((it, indexH) => {
          return(
            <TodoTableCell key={index.toString() + indexH.toString()} item={item} />
          )
        })
      }

    </TodoTableRowContainer>
  );
}

export default TodoTableRow;
