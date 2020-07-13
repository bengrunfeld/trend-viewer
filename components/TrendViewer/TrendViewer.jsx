import { useState, useEffect } from "react";

import { Chart, NavButtons, SignalSelection } from "../";
import { Viewer } from "./TrendViewer.styles";

const TrendViewer = ({ data, loading, called, error }) => {
  const [signals, setSignals] = useState(data);

  useEffect(() => {
    if (!loading && data) {
      setSignals(data);
    }
  }, [loading, data]);

  if (called && loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Viewer>
      <Chart signals={signals} />
      <NavButtons signals={signals} setSignals={setSignals} />
      <SignalSelection signals={signals} setSignals={setSignals} />
    </Viewer>
  );
};

export default TrendViewer;
