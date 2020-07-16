import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 47px;
  z-index: 100;
  background: ${({ theme }) => theme.colors.blue};
  position: fixed;
  top: 0;
`;

export const Title = styled.h1`
  font-family: "Galada", verdana;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 5px 0 0 0;
  letter-spacing: 1.5px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    text-align: left;
    padding: 5px 0 0 30px;
  }
`;
