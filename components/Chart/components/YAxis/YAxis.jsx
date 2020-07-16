import {
  AxisContainer,
  BottomTick,
  Tick,
  TickContainer,
  TickValue,
  TopTick,
  TickWrapper,
} from "./YAxis.styles.js";

const YAxis = ({}) => {
  return (
    <AxisContainer>
      <TickWrapper>
        <TickContainer>
          <TickValue>555555</TickValue>
          <Tick>
            <TopTick
              x1="0"
              y1="10"
              x2="8"
              y2="10"
              style={{ stroke: "black", strokeWidth: 4 }}
            />
          </Tick>
        </TickContainer>
      </TickWrapper>
      <TickWrapper>
        <TickContainer>
          <TickValue>5</TickValue>
          <Tick>
            <BottomTick
              x1="0"
              y1="10"
              x2="8"
              y2="10"
              style={{ stroke: "black", strokeWidth: 4 }}
            />
          </Tick>
        </TickContainer>
      </TickWrapper>
    </AxisContainer>
  );
};

export default YAxis;
