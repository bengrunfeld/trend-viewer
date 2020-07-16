import styled from "styled-components";

export const AxisContainer = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    min-width: 20px;
    height: 371px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    left: -21px;
  }
`;

export const TickWrapper = styled.div``;

export const TickContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const TickValue = styled.span`
  font-family: verdana;
  margin: 0;
`;

export const Tick = styled.svg`
  width: 8px;
  height: 20px;
`;

export const TopTick = styled.line``;

export const BottomTick = styled.line``;
