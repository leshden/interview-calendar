import {DaysPanelScroll, DaysPanelContainer} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';
import { useDraggable } from "react-use-draggable-scroll";
import { useRef, useEffect, useState } from 'react';
import {GetSymbolTextOfDay} from '../../utils/Utils';

const DaysPanel = () => {

  const initialState = () => {
    const arr = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    let value = -4;
    for (let i = 0; i < arr.length; ++i) {
      arr[i].setDate(arr[i].getDate() + value);
      value++;
    }
    return arr;
  }

  const ref = useRef();
  const { events } = useDraggable(ref);

  useEffect(()=>{
    const offset = ref.current.firstChild.childNodes[1].offsetLeft - ref.current.firstChild.childNodes[0].offsetLeft;
    ref.current.scrollLeft = offset;
  }, [])

  const [arr, setArr] = useState(initialState);

  const days = arr.map((item, index) => {
    return {txt: GetSymbolTextOfDay(item.getDay()), num: item.getDate()}
  });

  const handleOnScroll = (e) => {
    const offset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
    if (e.target.scrollLeft > offset) {
      e.target.scrollLeft = 0;
      const fArr = arr.slice(1);
      let nextDate = new Date();
      nextDate.setDate(fArr[fArr.length - 1].getDate() + 1)
      setArr([...fArr, nextDate]);
    }
    else if (e.target.scrollLeft === 0) {
      e.target.scrollLeft = offset;
      const fArr = arr.slice(0, -1);
      let prevDate = new Date();
      prevDate.setDate(fArr[0].getDate() - 1)
      setArr([prevDate, ...fArr]);
    }
  }

  return (
      <DaysPanelScroll
      {...events}
      ref={ref}
      onScroll={handleOnScroll}>
      <DaysPanelContainer>
      {
        days.map((item, index) => {
          return(
          <DayPanel key={index} txt={item.txt} num={item.num} selected={true} />
        );
       })
      }
      </DaysPanelContainer>
    </DaysPanelScroll>
  );
}

export default DaysPanel;
