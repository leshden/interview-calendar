import {DayPanelContainer} from './DayPanelStyled';

const width = window.innerWidth;

const DayPanel = () => {
  return (
    <DayPanelContainer prinary={width}>
      <div>T</div>
      <div>12</div>
    </DayPanelContainer>
  );
}

export default DayPanel;
