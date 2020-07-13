import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue};
`;

export const Title = styled.h1`
  font-family: "Bangers", verdana;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 10px 0 10px 30px;
`;
