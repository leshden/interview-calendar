//@flow
import * as React from 'react';
import {HeaderContainer, HeaderTitle, Button} from './HeaderStyled';

const Header = () : React.Node => {

  const addEventOnClick = () => {
    // TODO:
  }

  return (
    <HeaderContainer>
      <HeaderTitle>Interview Calendar</HeaderTitle>
      <Button onClick={addEventOnClick}>+</Button>
    </HeaderContainer>
  );
}

export default Header;
