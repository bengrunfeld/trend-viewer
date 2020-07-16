import { useRef, useEffect, useState } from "react";
import { scaleLinear } from "d3";

import {
  ChartAxisContainer,
  ChartContainer,
  SignalContainer,
  SignalWrapper,
} from "./Chart.styles";
import { Point, YAxis } from "./components";

const Chart = ({
  currentValue,
  setCurrentValue,
  signalFilter,
  signalMinMaxes,
  signals,
  signalValueFilter,
}) => {
  const [chartWidth, setChartWidth] = useState(false);

  const ref = useRef(null);

  const signal1Filter = signalFilter === "signal1" || signalFilter === "all";
  const signal2Filter = signalFilter === "signal2" || signalFilter === "all";
  const signal3Filter = signalFilter === "signal3" || signalFilter === "all";

  useEffect(() => {
    setChartWidth(ref?.current?.offsetWidth || 1000);

    window.addEventListener("resize", () => {
      if (ref?.current?.offsetWidth) setChartWidth(ref.current.offsetWidth);
    });
  }, []);

  if (!signals) return <div></div>;

  const createXScale = signals =>
    scaleLinear()
      .domain([0, signals.length - 1])
      .range([10, chartWidth - 30]);

  const createYScale = val =>
    scaleLinear().domain([val.min, val.max]).range([0, 370]);

  const scaleX = createXScale(signals);

  const scaleVal1 = createYScale(signalMinMaxes.signal1);
  const scaleVal2 = createYScale(signalMinMaxes.signal2);
  const scaleVal3 = createYScale(signalMinMaxes.signal3);

  return (
    <ChartContainer ref={ref}>
      <YAxis signalMinMaxes={signalMinMaxes} currentValue={currentValue} />
      <SignalWrapper chartWidth={chartWidth}>
        <g>
          {signal1Filter &&
            signals.map((item, i) => {
              if (
                signalValueFilter &&
                parseFloat(item.value1) < parseFloat(signalValueFilter)
              )
                return;

              return (
                <Point
                  xPos={scaleX(i)}
                  yPos={scaleVal1(item.value1)}
                  key={item.id}
                  sigNum={0}
                  setCurrentValue={setCurrentValue}
                  item={item}
                />
              );
            })}
        </g>
        <g>
          {signal2Filter &&
            signals.map((item, i) => {
              if (
                signalValueFilter &&
                parseFloat(item.value2) < parseFloat(signalValueFilter)
              )
                return;

              return (
                <Point
                  xPos={scaleX(i)}
                  yPos={scaleVal2(item.value2)}
                  key={item.id}
                  sigNum={1}
                  setCurrentValue={setCurrentValue}
                  item={item}
                />
              );
            })}
        </g>
        <g>
          {signal3Filter &&
            signals.map((item, i) => {
              if (
                signalValueFilter &&
                parseFloat(item.value3) < parseFloat(signalValueFilter)
              )
                return;

              return (
                <Point
                  xPos={scaleX(i)}
                  yPos={scaleVal3(item.value3)}
                  key={item.id}
                  sigNum={2}
                  setCurrentValue={setCurrentValue}
                  item={item}
                />
              );
            })}
        </g>
      </SignalWrapper>
    </ChartContainer>
  );
};

export default Chart;
