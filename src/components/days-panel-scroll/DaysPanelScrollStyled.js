import styled from 'styled-components'

export const DaysPanelContainer = styled.div`
  width: 90%;
  overflow-x: hidden;
`;

export const DaysPanelContainerScroll = styled.div.attrs(props => ({
    style: {
      left: props.offset
    }
  }))`
  position: relative;
  cursor: pointer;
  width: 200%;
  display: flex;
  justify-content: space-around;
`;
