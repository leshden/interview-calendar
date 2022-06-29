import {DayPanelContainer, DayPanelNumber, DayPanelNumberContainer, DayPanelText} from './DayPanelStyled';

const DayPanel = ({txt, num}) => {
  const selected = true;

  return (
    <DayPanelContainer>
      <DayPanelText>{txt}</DayPanelText>
      <DayPanelNumberContainer selected = {selected}>
        <DayPanelNumber selected = {selected}>{num}</DayPanelNumber>
      </DayPanelNumberContainer>
    </DayPanelContainer>
  );
}

export default DayPanel;
