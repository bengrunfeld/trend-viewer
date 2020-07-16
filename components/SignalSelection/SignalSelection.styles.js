import styled from "styled-components";

export const Well = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  padding: 10px 30px 15px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  > :first-child {
    padding-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Select = styled.select`
  padding: 10px;

  border: none;
  appearance: none;
`;

export const Input = styled.input`
  padding: 10px;

  border: none;
  appearance: none;
`;

export const ResetButton = styled.button`
  padding: 10px;

  border: none;
  appearance: none;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  padding: 10px 0 13px 0;
  font-family: verdana;
`;
