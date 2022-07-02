import {DayPanelContainer, DayPanelNumber, DayPanelText} from './DayPanelStyled';

const DayPanel = ({txt, num, selected}) => {
  return (
    <DayPanelContainer>
      <DayPanelText>{txt}</DayPanelText>
      <DayPanelNumber selected = {selected}>{num}</DayPanelNumber>
    </DayPanelContainer>
  );
}

export default DayPanel;
