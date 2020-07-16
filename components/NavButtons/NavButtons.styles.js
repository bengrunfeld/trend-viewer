import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
  }
`;

export const LeftButtons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CenterButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavButton = styled.button`
  margin: 10px 5px;
`;
