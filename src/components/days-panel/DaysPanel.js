import {DaysPanelMain, DaysPanelScroll, DaysPanelContainer} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';
import { useRef, useEffect, useState, useContext } from 'react';
import {GetSymbolTextOfDay} from '../../utils/Utils';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';

const DaysPanel = () => {

  const {setOffset} = useContext(OffsetScrollContext);

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
  const [curOffset, setCurOffset] = useState(0);
  useEffect(()=>{
    const curOffset = ref.current.childNodes[1].offsetLeft - ref.current.childNodes[0].offsetLeft;
    console.log(`DAYS DISTANCE: ${curOffset}`);
    setCurOffset(curOffset);
  }, [curOffset])

  const [arr, setArr] = useState(initialState);

  const days = arr.map((item, index) => {
    return {txt: GetSymbolTextOfDay(item.getDay()), num: item.getDate()}
  });

  const handleOnScroll = (e) => {
    setOffset(e.target.scrollLeft);
    const curOffset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
    if (e.target.scrollLeft > curOffset) {
      e.target.scrollLeft = 0;
      const fArr = arr.slice(1);
      let nextDate = new Date();
      nextDate.setDate(fArr[fArr.length - 1].getDate() + 1)
      setArr([...fArr, nextDate]);
    }
    else if (e.target.scrollLeft === 0) {
      e.target.scrollLeft = curOffset;
      const fArr = arr.slice(0, -1);
      let prevDate = new Date();
      prevDate.setDate(fArr[0].getDate() - 1)
      setArr([prevDate, ...fArr]);
    }
  }

  return (
      <DaysPanelMain>
      <DraggableScroll
      callbackOnScroll={handleOnScroll} curOffset = {curOffset}>
      <DaysPanelContainer ref={ref}>
      {
        days.map((item, index) => {
          return(
          <DayPanel key={index} txt={item.txt} num={item.num} selected={true} />
        );
       })
      }
      </DaysPanelContainer>
    </DraggableScroll>
    </DaysPanelMain>
  );
}

export default DaysPanel;
