import { useState, useEffect } from "react";

import {
  Chart,
  CurrentValue,
  NavButtons,
  SignalSelection,
  XAxisTicks,
} from "../";
import { Viewer } from "./TrendViewer.styles";

const TrendViewer = ({ data, loading, called, error }) => {
  const [signals, setSignals] = useState(false);
  const [currentValue, setCurrentValue] = useState(false);
  const [chartWidth, setChartWidth] = useState(false);
  const [signalFilter, setSignalFilter] = useState("all");
  const [signalValueFilter, setSignalValueFilter] = useState(false);
  const [arr, setArrIndicies] = useState({ start: 0, end: 10 });

  useEffect(() => {
    if (!loading && data) {
      setSignals(data?.points.slice(arr.start, arr.end));
    }
  }, [loading, data]);

  if (called && loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const resetAll = () => {
    setSignals(data?.points.slice(0, 10));
    setArrIndicies({ start: 0, end: 10 });
    console.log("RA: ", arr.start, arr.end);
  };

  const panLeftOne = () => {
    if (arr.start === 0) return;

    setSignals(data?.points.slice(arr.start - 1, arr.end - 1));
    setArrIndicies({ start: arr.start - 1, end: arr.end - 1 });
    console.log("PLO: ", arr.start, arr.end);
  };

  const panRightOne = () => {
    if (arr.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.start + 1, arr.end + 1));
    setArrIndicies({ start: arr.start + 1, end: arr.end + 1 });
    console.log("PRO: ", arr.start, arr.end);
  };

  const panLeftMany = n => {
    if (arr.start - signals.length < 0) return;

    setSignals(
      data?.points.slice(arr.start - signals.length, arr.end - signals.length)
    );
    setArrIndicies({
      start: arr.start - signals.length,
      end: arr.end - signals.length,
    });

    console.log("PLM: ", arr.start, arr.end);
  };

  const panRightMany = n => {
    if (arr.end + signals.length > data.length - 1) return;

    setSignals(
      data?.points.slice(arr.start + signals.length, arr.end + signals.length)
    );
    setArrIndicies({
      start: arr.start + signals.length,
      end: arr.end + signals.length,
    });

    console.log("PRM: ", arr.start, arr.end);
  };

  const zoomIn = n => {
    if (signals.length < 4) return;

    setSignals(data?.points.slice(arr.start, arr.end - 1));
    setArrIndicies({ start: arr.start, end: arr.end - 1 });

    console.log("ZI: ", arr.start, arr.end);
  };

  const zoomOut = n => {
    if (arr.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.start, arr.end + 1));
    setArrIndicies({ start: arr.start, end: arr.end + 1 });

    console.log("ZO: ", arr.start, arr.end);
  };

  return (
    <Viewer>
      <Chart
        signals={signals}
        setCurrentValue={setCurrentValue}
        setChartWidth={setChartWidth}
        signalFilter={signalFilter}
        signalValueFilter={signalValueFilter}
      />
      <XAxisTicks
        timeStart={signals[0]}
        timeEnd={signals[signals.length - 1]}
      />
      <NavButtons
        resetAll={resetAll}
        panLeftOne={panLeftOne}
        panRightOne={panRightOne}
        panLeftMany={panLeftMany}
        panRightMany={panRightMany}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
      />
      <CurrentValue currentValue={currentValue} />
      <SignalSelection
        signals={signals}
        setSignalFilter={setSignalFilter}
        setSignalValueFilter={setSignalValueFilter}
      />
    </Viewer>
  );
};

export default TrendViewer;
