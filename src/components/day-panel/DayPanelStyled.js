import styled, {css} from 'styled-components'

export const DayPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: calc(600px/7);
  ${props => props.prinary < 740 && css`margin-right:${props.prinary/9}px`}
`;

export const DayPanelNumber = styled.div`
  background-color: rgb(230,230,230);
  width: 25px;
  height: 25px;
  text-align: center;
  ${props => props.selected && css`
    background-color: red;
    color: white;
    border-radius: 25px;
    `}
`;
