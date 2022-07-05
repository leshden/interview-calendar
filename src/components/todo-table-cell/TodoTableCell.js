import {TodoTableCellStyled} from './TodoTableCellStyled';

const TodoTableCell = ({item}) => {
  return (
    <TodoTableCellStyled>
      {item}
    </TodoTableCellStyled>
  )
}

export default TodoTableCell;
