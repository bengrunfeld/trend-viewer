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
  if (error) {
    console.log(error);
    return <p>Error: See output in console</p>;
  }

  const findMinMax = (signalId, signals) => {
    return {
      min: Math.min.apply(
        Math,
        signals.map(item => item[signalId])
      ),
      max: Math.max.apply(
        Math,
        signals.map(item => item[signalId])
      ),
    };
  };

  const signalMinMaxes = signals && {
    signal1: findMinMax("value1", signals),
    signal2: findMinMax("value2", signals),
    signal3: findMinMax("value3", signals),
  };

  const resetAll = () => {
    setSignals(data?.points.slice(0, 10));
    setArrIndicies({ start: 0, end: 10 });
  };

  const panLeftOne = () => {
    if (arr.start === 0) return;

    setSignals(data?.points.slice(arr.start - 1, arr.end - 1));
    setArrIndicies({ start: arr.start - 1, end: arr.end - 1 });
  };

  const panRightOne = () => {
    if (arr.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.start + 1, arr.end + 1));
    setArrIndicies({ start: arr.start + 1, end: arr.end + 1 });
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
  };

  const zoomIn = n => {
    if (signals.length < 4) return;

    setSignals(data?.points.slice(arr.start, arr.end - 1));
    setArrIndicies({ start: arr.start, end: arr.end - 1 });
  };

  const zoomOut = n => {
    if (arr.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.start, arr.end + 1));
    setArrIndicies({ start: arr.start, end: arr.end + 1 });
  };

  return (
    <Viewer>
      <Chart
        signals={signals}
        currentValue={currentValue}
        signalMinMaxes={signalMinMaxes}
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
