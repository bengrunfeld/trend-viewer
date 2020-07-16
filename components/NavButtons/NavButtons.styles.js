import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftButtons = styled.div``;

export const CenterButtons = styled.div`
  text-align: center;
`;

export const RightButtons = styled.div`
  text-align: end;
`;

export const NavButton = styled.button`
  margin: 10px 5px;
  padding: 10px 14px;
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: 3px;

  appearance: none;
  user-select: none;
`;
