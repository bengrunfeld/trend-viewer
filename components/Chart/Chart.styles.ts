import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 400px;
  border: 3px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  box-sizing: border-box;
  cursor: default;
  position: relative;
`;

type ChartWidth = {
  chartWidth: number;
};

export const SignalWrapper = styled.svg<ChartWidth>`
  width: ${({ chartWidth }) => chartWidth || "1000"}px;
  height: 400px;
`;

// export const SignalContainer = styled.svg`
//   position: absolute;
//   width: 1000px;
//   height: 400px;
// `;

// export const Point = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 5px;
//   position: absolute;
//   left: ${({ xPos }) => `${xPos}px`};
//   top: ${({ yPos }) => `${380 - yPos}px`};
//   background: ${({ sigNum }) => {
//     if (sigNum === 0) return "red";
//     if (sigNum === 1) return "green";
//     if (sigNum === 2) return "blue";
//   }};
// `;

// // top:
