import { useRef, useEffect } from "react";
import {
  ChartContainer,
  SignalContainer,
  Point,
  Wrapper,
} from "./Chart.styles";

import { scaleLinear } from "d3";

const Chart = ({ signals, setCurrentValue, setChartWidth }) => {
  const ref = useRef(null);

  useEffect(() => {
    setChartWidth(ref?.current?.offsetWidth);

    window.addEventListener("resize", () => {
      if (ref?.current?.offsetWidth) setChartWidth(ref?.current?.offsetWidth);
    });
  }, []);

  if (!signals) return <div></div>;

  const createScale = val =>
    scaleLinear().domain([val.min, val.max]).range([0, 375]);

  let minMax = {
    value1: { min: false, max: false },
    value2: { min: false, max: false },
    value3: { min: false, max: false },
  };

  // Find the maximum value for each signal
  signals.forEach((item, i) => {
    // Set initial vals
    if (i === 0) {
      minMax.value1.min = item.value1;
      minMax.value1.max = item.value1;
      minMax.value2.min = item.value2;
      minMax.value2.max = item.value2;
      minMax.value3.min = item.value3;
      minMax.value3.max = item.value3;

      return;
    }

    // value1
    minMax.value1.min =
      item.value1 < minMax.value1.min ? item.value1 : minMax.value1.min;

    minMax.value1.max =
      item.value1 > minMax.value1.max ? item.value1 : minMax.value1.max;

    // value2
    minMax.value2.min =
      item.value2 < minMax.value2.min ? item.value2 : minMax.value2.min;

    minMax.value2.max =
      item.value2 > minMax.value2.max ? item.value2 : minMax.value2.max;

    // value3
    minMax.value3.min =
      item.value3 < minMax.value3.min ? item.value3 : minMax.value3.min;

    minMax.value3.max =
      item.value3 > minMax.value3.max ? item.value3 : minMax.value3.max;
  });

  console.log(minMax);

  const scaleVal1 = createScale(minMax.value1);
  const scaleVal2 = createScale(minMax.value2);
  const scaleVal3 = createScale(minMax.value3);

  return (
    <ChartContainer ref={ref}>
      <Wrapper num={0}>
        <SignalContainer>
          {signals.map((item, i) => {
            console.log(
              item.value1,
              scaleVal1(item.value1),
              item.value2,
              scaleVal2(item.value2),
              item.value3,
              scaleVal3(item.value3)
            );
            return (
              <Point yPos={scaleVal1(item.value1)} key={item.id} sigNum={0} />
            );
          })}
        </SignalContainer>
      </Wrapper>

      <Wrapper num={1}>
        <SignalContainer>
          {signals.map((item, i) => {
            return (
              <Point yPos={scaleVal2(item.value2)} key={item.id} sigNum={1} />
            );
          })}
        </SignalContainer>
      </Wrapper>

      <Wrapper num={2}>
        <SignalContainer>
          {signals.map((item, i) => {
            return (
              <Point yPos={scaleVal3(item.value3)} key={item.id} sigNum={2} />
            );
          })}
        </SignalContainer>
      </Wrapper>
    </ChartContainer>
  );
};

export default Chart;
