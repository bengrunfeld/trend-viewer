import { useState, useEffect, useRef } from "react";

import {
  Chart,
  CurrentValue,
  NavButtons,
  SignalSelection,
  XAxisTicks,
} from "../";

import { Viewer, Message } from "./TrendViewer.styles";

const TrendViewer = ({ data, loading, called, error }) => {
  const [signals, setSignals] = useState([]);
  const [currentValue, setCurrentValue] = useState(false);
  const [signalFilter, setSignalFilter] = useState("all");
  const [signalValueFilter, setSignalValueFilter] = useState(false);
  const arr = useRef({ start: 0, end: 50 });

  useEffect(() => {
    if (!loading && data) {
      setSignals(data?.points.slice(arr.current.start, arr.current.end));
    }
  }, [loading, data]);

  if (error) {
    console.log(error);
    return <Message>Error: See output in console</Message>;
  }

  if (!data || (called && loading)) return <Message>Loading...</Message>;

  const signalsExist = signalsArr => signalsArr.length !== 0;

  const defaultObj = {value1: [], value2: [], value3: []}
  
  const breakUpSignals = signals => signals.reduce((a, b, i) => ({
    value1: [...a.value1, b.value1],
    value2: [...a.value2, b.value2],
    value3: [...a.value3, b.value3],
  }), defaultObj)

  const splitSignals = breakUpSignals(signals) 

  const signalMinMaxes = signalsExist(signals) && {
    signal1: {min: Math.min.apply(Math, splitSignals.value1), max: Math.max.apply(Math, splitSignals.value1)},
    signal2: {min: Math.min.apply(Math, splitSignals.value2), max: Math.max.apply(Math, splitSignals.value2)},
    signal3: {min: Math.min.apply(Math, splitSignals.value3), max: Math.max.apply(Math, splitSignals.value3)},
  }

  const resetAll = () => {
    setSignals(data?.points.slice(0, 50));
    arr.current = ({ start: 0, end: 50 });
  };

  const panLeftOne = () => {
    // Check that you're not at the beginning of the data
    if (arr.current.start === 0) return;

    setSignals(data?.points.slice(arr.current.start - 1, arr.current.end - 1));
    arr.current = ({ start: arr.current.start - 1, end: arr.current.end - 1 });
  };

  const panRightOne = () => {
    // Check that you're not at the end of the data
    if (arr.current.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.current.start + 1, arr.current.end + 1));
    arr.current = ({ start: arr.current.start + 1, end: arr.current.end + 1 });
  };

  const panLeftMany = n => {
    // Check that you're not at the beginning of the data
    if (arr.current.start - signals.length < 0) return;

    setSignals(
      data?.points.slice(arr.current.start - signals.length, arr.current.end - signals.length)
    );
    arr.current = ({
      start: arr.current.start - signals.length,
      end: arr.current.end - signals.length,
    });
  };

  const panRightMany = n => {
    // Check that you're not at the end of the data
    if (arr.current.end + signals.length > data.length - 1) return;

    setSignals(
      data?.points.slice(arr.current.start + signals.length, arr.current.end + signals.length)
    );

    arr.current = ({
      start: arr.current.start + signals.length,
      end: arr.current.end + signals.length,
    });
  };

  const zoomIn = n => {
    if (signals.length < 4) return;

    setSignals(data?.points.slice(arr.current.start, arr.current.end - 1));
    arr.current = ({ start: arr.current.start, end: arr.current.end - 1 });
  };

  const zoomOut = n => {
    // Check that you're not at the end of the data
    if (arr.current.end === data.length - 1) return;

    setSignals(data?.points.slice(arr.current.start, arr.current.end + 1));
    arr.current = ({ start: arr.current.start, end: arr.current.end + 1 });
  };

  return (
    <Viewer>
      <Chart
        signals={signals}
        signalsExist={signalsExist}
        currentValue={currentValue}
        signalMinMaxes={signalMinMaxes}
        setCurrentValue={setCurrentValue}
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
        setSignalFilter={setSignalFilter}
        setSignalValueFilter={setSignalValueFilter}
      />
    </Viewer>
  );
};

export default TrendViewer;
