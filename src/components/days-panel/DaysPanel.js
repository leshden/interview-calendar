import {DaysPanelMain, DaysPanelScroll, DaysPanelContainer} from './DaysPanelStyled';
import DayPanel from '../day-panel/DayPanel';
import { useRef, useEffect, useState, useContext } from 'react';
import {GetSymbolTextOfDay} from '../../utils/Utils';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';
import DraggableScroll from '../draggable-scroll/DraggableScroll';

const DaysPanel = () => {

  const {refToDays, refToTable} = useContext(OffsetScrollContext);
  // const [press, setPress] = useState(false);

  const initialState = () => {
    const arr = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];
    let value = -4;
    for (let i = 0; i < arr.length; ++i) {
      arr[i].setDate(arr[i].getDate() + value);
      value++;
    }
    return arr;
  }

  let isDisableHandleScroll = false;
  const disableHandleScroll = () => {
    isDisableHandleScroll = true;
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

  // const mouseDown = (e) => {
  //   e.preventDefault();
  //   setPress(true);
  //   console.log('Down!!');
  // }
  //
  // const mouseUp = (e) => {
  //   e.preventDefault();
  //   setPress(false);
  //   console.log('Up!!');
  // }
  //
  // const mouseOut = (e) => {
  //   e.preventDefault();
  //   console.log('Out!!');
  // }

  const handleOnScroll = (e) => {

    if(isDisableHandleScroll) {
      return;
    }

    refToTable.current.scrollLeft = e.target.scrollLeft;

    const curOffset = e.target.firstChild.childNodes[1].offsetLeft - e.target.firstChild.childNodes[0].offsetLeft;
    if (e.target.scrollLeft > curOffset) {
      e.target.scrollLeft = 0;
      const fArr = arr.slice(1);
      let nextDate = new Date();
      nextDate.setDate(fArr[fArr.length - 1].getDate() + 1)
      setArr([...fArr, nextDate]);
      disableHandleScroll();
    }
    else if (e.target.scrollLeft === 0) {
      e.target.scrollLeft = curOffset;
      const fArr = arr.slice(0, -1);
      let prevDate = new Date();
      prevDate.setDate(fArr[0].getDate() - 1)
      setArr([prevDate, ...fArr]);
      disableHandleScroll();
    }
  }

  return (
      <DaysPanelMain>
      <DraggableScroll
      callbackOnScroll={handleOnScroll} curOffset = {curOffset} myRef={refToDays}>
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
