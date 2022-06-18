import styled, {css} from 'styled-components'

export const DayPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: calc(600px/7);
  ${props => props.prinary < 740 && css`margin-right:${props.prinary/9}px`}
`;
