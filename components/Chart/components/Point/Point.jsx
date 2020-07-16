const Point = ({ xPos, yPos, sigNum, setCurrentValue, item }) => {
  const getColor = sigNum => {
    if (sigNum === 0) return "red";
    if (sigNum === 1) return "green";
    if (sigNum === 2) return "blue";

    throw "Error - signal number not provided";
  };

  return (
    <circle
      r="6.5"
      cx={xPos}
      cy={380 - yPos}
      fill={getColor(sigNum)}
      onMouseEnter={setCurrentValue.bind(
        "",
        Object.assign({}, item, { sigNum })
      )}
      onTouchEnd={setCurrentValue.bind("", Object.assign({}, item, { sigNum }))}
    />
  );
};

export default Point;
