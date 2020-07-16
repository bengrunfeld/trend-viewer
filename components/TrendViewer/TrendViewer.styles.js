import styled from "styled-components";

export const Viewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 95%;
    max-width: 1000px;
    margin-top: 25px;

    @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
      width: 100%;
    }
  }
`;
