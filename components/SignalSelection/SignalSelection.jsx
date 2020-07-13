import {
  Well,
  Selection,
  Title,
  Select,
  Input,
  ResetButton,
} from "./SignalSelection.styles";

const SignalSelection = () => (
  <Well>
    <Selection>
      <Title>Display Signal</Title>
      <Select>
        <option>All</option>
        <option>Signal 1</option>
        <option>Signal 2</option>
        <option>Signal 3</option>
      </Select>
    </Selection>

    <Selection>
      <Title>Highlight above value</Title>
      <Select>
        <option>All</option>
        <option>Signal 1</option>
        <option>Signal 2</option>
        <option>Signal 3</option>
      </Select>
      <Input type="text" placeholder="Select a value" />
      <ResetButton>Reset</ResetButton>
    </Selection>
  </Well>
);

export default SignalSelection;
