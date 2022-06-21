import {DayPanelContainer, DayPanelNumber, DayPanelNumberContainer, DayPanelText} from './DayPanelStyled';

const width = window.innerWidth;

const DayPanel = () => {
  const selected = true;

  return (
    <DayPanelContainer prinary={width}>
      <DayPanelText>T</DayPanelText>
      <DayPanelNumberContainer selected = {selected}>
        <DayPanelNumber selected = {selected}>22</DayPanelNumber>
      </DayPanelNumberContainer>
    </DayPanelContainer>
  );
}

export default DayPanel;
