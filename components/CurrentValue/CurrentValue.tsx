import {
  ValueContainer,
  Value,
  ValueList,
  Title,
  Indicator,
} from "./CurrentValue.styles";

interface CurrentValue {
  timestamp: string;
  value1: string;
  value2: string;
  value3: string;
}

const CurrentValue = ({ currentValue }) => {
  const { timestamp, value1, value2, value3 } = currentValue;

  return (
    <ValueContainer>
      <Title>Hover over a point</Title>
      <ValueList>
        <Value>Timestamp: {timestamp}</Value>
        <Value>
          <Indicator signal="value1" />
          Value 1: {value1}
        </Value>
        <Value>
          <Indicator signal="value2" />
          Value 2: {value2}
        </Value>
        <Value>
          <Indicator signal="value3" />
          Value 3: {value3}
        </Value>
      </ValueList>
    </ValueContainer>
  );
};

export default CurrentValue;
