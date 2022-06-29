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

export const TodoTableRowContainer = styled.div`
  width: 100%;
  min-width: 40px;
  height: 100%;
`;

export const TodoTableTest = styled.div`
  width: 100%;
  min-width: 40px;
  height: 50px;
  background: white;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const TodoRowTest = styled.div`
  width: 50px;
  height 50px;
  bakckground: pink;
`;
