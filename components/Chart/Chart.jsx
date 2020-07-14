import { useRef, useEffect } from "react";
import { scaleLinear } from "d3";

import { ChartContainer, SignalContainer, SignalWrapper } from "./Chart.styles";
import { Point } from "./components";

const Chart = ({
  signals,
  setCurrentValue,
  setChartWidth,
  signalFilter,
  signalValueFilter,
}) => {
  const ref = useRef(null);

  const signal1Filter = signalFilter === "signal1" || signalFilter === "all";
  const signal2Filter = signalFilter === "signal2" || signalFilter === "all";
  const signal3Filter = signalFilter === "signal3" || signalFilter === "all";

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
    scaleLinear().domain([val.min, val.max]).range([0, 370]);

  const value1MinMax = {
    min: Math.min.apply(
      Math,
      signals.map(item => item.value1)
    ),
    max: Math.max.apply(
      Math,
      signals.map(item => item.value1)
    ),
  };

  const value2MinMax = {
    min: Math.min.apply(
      Math,
      signals.map(item => item.value2)
    ),
    max: Math.max.apply(
      Math,
      signals.map(item => item.value2)
    ),
  };

  const value3MinMax = {
    min: Math.min.apply(
      Math,
      signals.map(item => item.value3)
    ),
    max: Math.max.apply(
      Math,
      signals.map(item => item.value3)
    ),
  };

  console.log(value2MinMax);

  const scaleX = createXScale(signals);

  const scaleVal1 = createYScale(value1MinMax);
  const scaleVal2 = createYScale(value2MinMax);
  const scaleVal3 = createYScale(value3MinMax);

  return (
    <ChartContainer ref={ref}>
      <SignalWrapper>
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
      </SignalWrapper>
    </ChartContainer>
  );
};

export default Chart;
