import styled from 'styled-components'

export const TodoTableMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const TodoTableContainer = styled.div`
  width: 90%;
  height: 100%;
  background: orange;

  overflow-x: hidden;
`;

export const TodoTableContainerInner = styled.div`
    display: flex;
    width: 130%;
    height: 500px;
    justify-content: space-between;
`;
