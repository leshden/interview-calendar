import styled, {css} from 'styled-components'

export const DaysPanelContainer = styled.div`
  width: 90%;
  overflow-x: hidden;
`;

export const DaysPanelContainerScroll = styled.div`
  position: relative;
  cursor: pointer;
  width: 200%;
  ${props => css`left:${props.offset}px;`}
  display: flex;
  justify-content: space-around;
`;
