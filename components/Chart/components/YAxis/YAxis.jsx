import {
  AxisContainer,
  BottomTick,
  Tick,
  TickContainer,
  TickValue,
  TopTick,
  TickWrapper,
} from "./YAxis.styles.js";

const YAxis = ({ signalMinMaxes, currentValue }) => {
  if (!currentValue) return null;

  const key = Object.keys(signalMinMaxes)[currentValue.sigNum];

  const minMax = signalMinMaxes[key];

  return (
    <AxisContainer>
      <TickWrapper>
        <TickContainer>
          <TickValue>{minMax.max}</TickValue>
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
          <TickValue>{minMax.min}</TickValue>
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
