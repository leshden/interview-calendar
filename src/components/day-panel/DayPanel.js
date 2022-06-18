import {DayPanelContainer, DayPanelNumber} from './DayPanelStyled';

const width = window.innerWidth;

const DayPanel = () => {
  return (
    <DayPanelContainer prinary={width}>
      <div>T</div>
      <DayPanelNumber selected = {true}>12</DayPanelNumber>
    </DayPanelContainer>
  );
}

export default DayPanel;
