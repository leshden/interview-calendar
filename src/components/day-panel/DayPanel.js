//@flow
import * as React from 'react';
import {DayPanelContainer, DayPanelNumber, DayPanelText} from './DayPanelStyled';

type Props = {
  txt: string,
  num: number,
  selected: boolean
}

const DayPanel = ({txt, num, selected}: Props): React.Node => {
  return (
    <DayPanelContainer>
      <DayPanelText>{txt}</DayPanelText>
      <DayPanelNumber selected = {selected}>{num}</DayPanelNumber>
    </DayPanelContainer>
  );
}

export default DayPanel;
