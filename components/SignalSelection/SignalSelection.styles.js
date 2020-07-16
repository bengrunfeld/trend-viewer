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
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  appearance: none;
  font-size: 16px;

  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: right 10px center;
  padding-right: 1em;

  background-image: url("data:image/svg+xml;charset=utf-8, \
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'> \
      <polygon points='0,0 60,0 30,40' style='fill:black;'/> \
    </svg>");
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  appearance: none;
`;

export const ResetButton = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
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
