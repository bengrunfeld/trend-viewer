const Point = ({ xPos, yPos, key, sigNum, onMouseEnter }) => {
  const getColor = sigNum => {
    if (sigNum === 0) return "red";
    if (sigNum === 1) return "green";
    if (sigNum === 2) return "blue";

    throw "Error - signal number not provided";
  };

  console.log(yPos);

  return <circle r="5" cx={xPos} cy={380 - yPos} fill={getColor(sigNum)} />;
};

export default Point;
