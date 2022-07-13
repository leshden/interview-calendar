//@flow
import * as React from 'react';
import {TodoTableCellStyled} from './TodoTableCellStyled';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';

type Props = {
  item: number,
  hour: number
}

const TodoTableCell = ({item, hour}:Props) : React.Node => {

  const {data, setData} = React.useContext(OffsetScrollContext);

  const handleClick = () => {
    if(!hasData(item, hour)) {
      setData([...data, {d:item, h:hour}]);
      console.log('Add element');
    } else {
      console.log('Exist element!');
    }
    console.log(`click cell D: ${item} H: ${hour}`);
  }

  const hasData = (day: number, hour: number) : boolean => {
    return data.some(element => element.d === day && element.h === hour);
  }

  let color = hasData(item, hour) ? 'green' : 'white';

  return (
    <TodoTableCellStyled color={color} onClick={handleClick}>
      {item}
    </TodoTableCellStyled>
  )
}

export default TodoTableCell;
