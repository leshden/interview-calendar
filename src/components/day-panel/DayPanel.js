import {DayPanelContainer, DayPanelNumber, DayPanelNumberContainer, DayPanelText} from './DayPanelStyled';

const width = window.innerWidth;

const DayPanel = ({txt, num}) => {
  const selected = true;

  return (
    <DayPanelContainer prinary={width}>
      <DayPanelText>{txt}</DayPanelText>
      <DayPanelNumberContainer selected = {selected}>
        <DayPanelNumber selected = {selected}>{num}</DayPanelNumber>
      </DayPanelNumberContainer>
    </DayPanelContainer>
  );
}

export default DayPanel;
