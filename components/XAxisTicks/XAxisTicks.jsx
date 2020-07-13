import { TicksContainer, DateTime } from "./XAxisTicks.styles";

const XAxisTicks = ({ timeStart, timeEnd }) => {
  return (
    <TicksContainer>
      <DateTime>{timeStart?.timestamp}</DateTime>
      <DateTime>{timeEnd?.timestamp}</DateTime>
    </TicksContainer>
  );
};

export default XAxisTicks;
