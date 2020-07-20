import { useState } from "react";

import {
  Well,
  Selection,
  Title,
  Select,
  Input,
  ResetButton,
} from "./SignalSelection.styles";

const SignalSelection = ({ setSignalFilter, setSignalValueFilter }) => {
  // for interval component use for select boxes
  const [signal, setSignal] = useState("all");
  const [signalValue, setSignalValue] = useState("all");
  const [inputVal, setInputVal] = useState("");

  const handleSignalChange = e => {
    e.preventDefault();
    setSignal(e.target.value);
    setSignalFilter(e.target.value);
    window.scrollTo(0, 0);
  };

  const handleInputChange = e => {
    e.preventDefault();
    setInputVal(e.target.value);
    setSignalValueFilter(e.target.value);
  };

  const handleResetAll = e => {
    e.preventDefault();
    setInputVal("");
    setSignal("all");
    setSignalFilter("all");
    setSignalValueFilter(false);
  };

  return (
    <Well>
      <Selection>
        <Title>Display Signal</Title>
        <Select value={signal} onChange={handleSignalChange}>
          <option value="all">All</option>
          <option value="signal1">Signal 1</option>
          <option value="signal2">Signal 2</option>
          <option value="signal3">Signal 3</option>
        </Select>
      </Selection>

      <Selection>
        <Title>Highlight above value</Title>
        <Select value={signal} onChange={handleSignalChange}>
          <option value="all">All</option>
          <option value="signal1">Signal 1</option>
          <option value="signal2">Signal 2</option>
          <option value="signal3">Signal 3</option>
        </Select>
        <Input
          type="number"
          step="0.000000001"
          value={inputVal}
          placeholder="Type a value here"
          onChange={handleInputChange}
        />
        <ResetButton onClick={handleResetAll}>Reset</ResetButton>
      </Selection>
    </Well>
  );
};

export default SignalSelection;
