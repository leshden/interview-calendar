import DayPanel from '../day-panel/DayPanel';
import DaysPanelScroll from '../days-panel-scroll/DaysPanelScroll';

const DaysPanel = () => {

  const dayText = ['M', 'T', 'W', 'T', 'F', 'S', 'S' ];
  const curDate = new Date();
  const countDaysInMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 0).getDate();
  const generatedDays = Array.from({ length: countDaysInMonth }, (_, i) => i+1);
  const days = generatedDays.map((item, index) => {
    return {txt: dayText[new Date(curDate.getFullYear(), curDate.getMonth(), index).getDay()], num: item}
  });

  return (
      <DaysPanelScroll>
      {
        days.map((item, index) => {
          return(
          <DayPanel key={index} txt={item.txt} num={item.num} />
        );
       })
      }
    </DaysPanelScroll>
  );
}

export default DaysPanel;
