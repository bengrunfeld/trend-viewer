import {
  AxisContainer,
  BottomTick,
  Tick,
  TickContainer,
  TickValue,
  TopTick,
} from "./YAxis.styles.js";

const YAxis = ({}) => {
  return (
    <AxisContainer>
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
    </AxisContainer>
  );
};

export default YAxis;
