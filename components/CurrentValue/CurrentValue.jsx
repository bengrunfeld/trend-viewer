import { ValueContainer, Value, ValueList, Title } from "./CurrentValue.styles";

const CurrentValue = ({ currentValue }) => {
  const { timestamp, value1, value2, value3 } = currentValue;

  return (
    <ValueContainer>
      <Title>Hover over a point</Title>
      <ValueList>
        <Value>Timestamp: {timestamp}</Value>
        <Value>Value 1: {value1}</Value>
        <Value>Value 2: {value2}</Value>
        <Value>Value 3: {value3}</Value>
      </ValueList>
    </ValueContainer>
  );
};

export default CurrentValue;
