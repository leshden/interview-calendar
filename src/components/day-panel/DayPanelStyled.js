import styled, {css} from 'styled-components'

export const DayPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DayPanelText = styled.div`
  font-size: 10px;
`;

export const DayPanelNumberContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.selected && css`
    background: red;
    border-radius: 20px;
  `}
`;

export const DayPanelNumber = styled.div`
  background-color: rgb(230,230,230);
  font-size: 14px;

  ${props => props.selected && css`
    background-color: rgb(230,230,230, 0);
    color: white;
  `}
`;
