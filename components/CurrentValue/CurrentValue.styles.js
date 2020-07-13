import styled from "styled-components";

export const ValueContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  padding: 10px 30px 15px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Value = styled.span`
  display: inline-block;
  font-fize: 14px;
  padding: 3px;
  font-family: verdana;
`;

export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 3px;
  background: ${({ signal }) => {
    if (signal === "value1") return "red";
    if (signal === "value2") return "green";
    if (signal === "value3") return "blue";
  }};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  padding: 10px 0 13px 0;
  font-family: verdana;
`;

export const ValueList = styled.div`
  display: flex;
  justify-content: space-between;
`;
