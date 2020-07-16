import styled from "styled-components";

export const AxisContainer = styled.div`
  min-width: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  direction: rtl;
`;

export const TickContainer = styled.div`
  display: flex;
  position: relative;
`;

export const TickValue = styled.p`
  font-family: verdana;
  margin: 0;
  position: absolute;
  right: 10px;
`;

export const Tick = styled.svg`
  width: 8px;
`;

export const TopTick = styled.line``;

export const BottomTick = styled.line``;
