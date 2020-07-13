import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 400px;
  border: 3px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
  padding: 0 5px;
  top: ${({ num }) => `-${400 * num}px`};
`;

export const SignalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
  position: relative;
  top: 380px;
`;

export const Point = styled.div`
  width: 0;
  height: 0;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  bottom: ${({ yPos }) => `${yPos}px`};
  background: ${({ sigNum }) => {
    if (sigNum === 0) return "red";
    if (sigNum === 1) return "green";
    if (sigNum === 2) return "blue";
  }};
`;
