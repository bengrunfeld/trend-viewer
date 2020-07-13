import { useState, useEffect } from "react";

import { Chart, CurrentValue, NavButtons, SignalSelection } from "../";
import { Viewer } from "./TrendViewer.styles";

const TrendViewer = ({ data, loading, called, error }) => {
  const [signals, setSignals] = useState(false);
  const [currentValue, setCurrentValue] = useState(false);
  const [chartWidth, setChartWidth] = useState(false);

  const initialData = data?.points.slice(0, 10);

  useEffect(() => {
    if (!loading && data) {
      setSignals(initialData);
    }
  }, [loading, data]);

  if (called && loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const resetAll = () => {
    setSignals(initialData);
  };

  const panLeftOne = () => {
    setSignals(data);
  };

  const panRightOne = () => {
    setSignals(data);
  };

  const panLeftMany = n => {
    setSignals(data);
  };

  const panRightMany = n => {
    setSignals(data);
  };

  const zoomIn = n => {
    setSignals(data);
  };

  const zoomOut = n => {
    setSignals(data);
  };

  return (
    <Viewer>
      <Chart
        signals={signals}
        setCurrentValue={setCurrentValue}
        setChartWidth={setChartWidth}
      />
      <NavButtons signals={signals} setSignals={setSignals} />
      <CurrentValue currentValue={currentValue} />
      <SignalSelection signals={signals} setSignals={setSignals} />
    </Viewer>
  );
};

export default TrendViewer;
