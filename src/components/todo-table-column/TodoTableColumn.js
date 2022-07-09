import {TodoTableColumnContainer} from './TodoTableColumnStyled';
import TodoTableCell from '../todo-table-cell/TodoTableCell';

const TodoTableColumn = ({hours, index, item}) => {
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
