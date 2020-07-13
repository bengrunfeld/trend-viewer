import {
  NavContainer,
  LeftButtons,
  CenterButtons,
  RightButtons,
  NavButton,
} from "./NavButtons.styles";

const NavButtons = ({
  resetAll,
  panLeftOne,
  panRightOne,
  panLeftMany,
  panRightMany,
  zoomIn,
  zoomOut,
}) => (
  <NavContainer>
    <LeftButtons>
      <NavButton onClick={panLeftMany}>LL</NavButton>
      <NavButton onClick={panLeftOne}>L</NavButton>
    </LeftButtons>
    <CenterButtons>
      <NavButton onClick={resetAll}>Reset All</NavButton>
      <NavButton onClick={zoomIn}>Zoom In</NavButton>
      <NavButton onClick={zoomOut}>Zoom Out</NavButton>
    </CenterButtons>
    <RightButtons>
      <NavButton onClick={panRightOne}>R</NavButton>
      <NavButton onClick={panRightMany}>RR</NavButton>
    </RightButtons>
  </NavContainer>
);

export default NavButtons;
