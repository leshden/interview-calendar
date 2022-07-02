import styled, {css} from 'styled-components'

export const DayPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: yellow;
`;

export const DayPanelText = styled.p`
  font-size: 10px;
`;

export const DayPanelNumber = styled.p`
  width: 20px;
  height: 20px;
  background-color: rgb(230,230,230);
  font-size: 14px;

  ${props => props.selected && css`
    background-color: rgb(230,230,230, 0);
    color: white;
    background: red;
    border-radius: 20px;
  `}
`;
