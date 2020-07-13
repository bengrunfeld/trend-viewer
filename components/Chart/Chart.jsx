import { useRef, useEffect } from "react";
import { ChartContainer, SignalContainer, Point } from "./Chart.styles";

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

  const createXScale = signals =>
    scaleLinear()
      .domain([0, signals.length - 1])
      .range([10, 970]);

  const createYScale = val =>
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

  const scaleX = createXScale(signals);

  const scaleVal1 = createYScale(minMax.value1);
  const scaleVal2 = createYScale(minMax.value2);
  const scaleVal3 = createYScale(minMax.value3);

  return (
    <ChartContainer ref={ref}>
      <SignalContainer>
        {signals.map((item, i) => {
          console.log(scaleX(i));
          return (
            <Point
              xPos={scaleX(i)}
              yPos={scaleVal1(item.value1)}
              key={item.id}
              sigNum={0}
              onMouseEnter={setCurrentValue.bind("", item)}
            />
          );
        })}
      </SignalContainer>

      <SignalContainer>
        {signals.map((item, i) => {
          return (
            <Point
              xPos={scaleX(i)}
              yPos={scaleVal2(item.value2)}
              key={item.id}
              sigNum={1}
              onMouseEnter={setCurrentValue.bind("", item)}
            />
          );
        })}
      </SignalContainer>

      <SignalContainer>
        {signals.map((item, i) => {
          return (
            <Point
              xPos={scaleX(i)}
              yPos={scaleVal3(item.value3)}
              key={item.id}
              sigNum={2}
              onMouseEnter={setCurrentValue.bind("", item)}
            />
          );
        })}
      </SignalContainer>
    </ChartContainer>
  );
};

export default Chart;
