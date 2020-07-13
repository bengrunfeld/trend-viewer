import {
  NavContainer,
  LeftButtons,
  CenterButtons,
  RightButtons,
  NavButton,
} from "./NavButtons.styles";

const NavButtons = () => (
  <NavContainer>
    <LeftButtons>
      <NavButton>L</NavButton>
      <NavButton>LL</NavButton>
    </LeftButtons>
    <CenterButtons>
      <NavButton>Zoom In</NavButton>
      <NavButton>Zoom Out</NavButton>
    </CenterButtons>
    <RightButtons>
      <NavButton>R</NavButton>
      <NavButton>RR</NavButton>
    </RightButtons>
  </NavContainer>
);

export default NavButtons;
