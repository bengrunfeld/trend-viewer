import styled from "styled-components";

export const Viewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  > * {
    width: 95%;
    max-width: 1000px;
    margin-top: 25px;

    @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
      width: 100%;
    }
  }
`;

export const Message = styled.p`
  position: absolute;
  top: 40px;
  font-family: verdana;
  font-size: 16px;
  padding-left: 20px;
`;
