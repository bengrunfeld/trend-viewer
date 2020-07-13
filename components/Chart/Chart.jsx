import { useRef, useEffect } from "react";
import { ChartContainer } from "./Chart.styles";

const Chart = ({ setChartWidth }) => {
  const ref = useRef(null);

  useEffect(() => {
    setChartWidth(ref?.current?.offsetWidth);

    window.addEventListener("resize", () => {
      if (ref?.current?.offsetWidth) setChartWidth(ref?.current?.offsetWidth);
    });
  }, []);

  return <ChartContainer ref={ref}></ChartContainer>;
};

export default Chart;
