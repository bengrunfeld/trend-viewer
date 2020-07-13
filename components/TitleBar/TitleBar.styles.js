import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
`;

export const Title = styled.h1`
  font-family: "Galada", verdana;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 5px 0 0 30px;
  letter-spacing: 1.5px;
`;
