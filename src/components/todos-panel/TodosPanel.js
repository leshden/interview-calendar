import {TodoPanelContainer, TodoPanelTest, TodoPanelContainerInner} from './TodoPanelStyled';
import { useDraggable } from "react-use-draggable-scroll";
import { useRef, useEffect, useState } from 'react';

const TodosPanel = () => {

  const ref = useRef();
  const { events } = useDraggable(ref);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`Count : ${count}`);
    return () => {console.log(`Exit useEffect : ${count}`)}
  }, [count])

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
    <TodoPanelContainer
      {...events}
      ref={ref}
    >
      <TodoPanelContainerInner>
    {
      arr.map((_, index) => {
        return(
          <TodoPanelTest key={index}>
            Hello
          </TodoPanelTest>
        )
      })
    }
    </TodoPanelContainerInner>
    </TodoPanelContainer>

    <button onClick={()=>{setCount(count + 1)}}> click </button>

      </div>
  );
}

export default TodosPanel;
