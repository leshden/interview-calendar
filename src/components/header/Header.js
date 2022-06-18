import {HeaderContainer, HeaderTitle, Button} from './HeaderStyled';


const Header = () => {

  const addEventOnClick = () => {
    console.log('Add Event!');
  }

  return (
    <HeaderContainer>
      <HeaderTitle>Interview Calendar</HeaderTitle>
      <Button onClick={addEventOnClick}>+</Button>
    </HeaderContainer>
  );
}

export default Header;
