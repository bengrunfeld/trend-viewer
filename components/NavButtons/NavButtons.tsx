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
      <NavButton onClick={panLeftMany}>&#8678; &#8678;</NavButton>
      <NavButton onClick={panLeftOne}>&#8678;</NavButton>
    </LeftButtons>
    <CenterButtons>
      <NavButton onClick={resetAll}>Reset All</NavButton>
      <NavButton onClick={zoomIn}>Zoom In</NavButton>
      <NavButton onClick={zoomOut}>Zoom Out</NavButton>
    </CenterButtons>
    <RightButtons>
      <NavButton onClick={panRightOne}>&#8680;</NavButton>
      <NavButton onClick={panRightMany}>&#8680; &#8680;</NavButton>
    </RightButtons>
  </NavContainer>
);

export default NavButtons;
