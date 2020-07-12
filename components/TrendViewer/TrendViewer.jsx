import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DATA_POINTS = gql`
  query DataPoints($start: String, $end: String) {
    points(startDateTime: $start, endDateTime: $end) {
      id
      timestamp
      value1
      value2
      value3
    }
  }
`;

const TrendViewer = () => {
  const [getDataPoints, { called, loading, error, data }] = useLazyQuery(
    GET_DATA_POINTS,
    {
      variables: { start: "false", end: "false" },
    }
  );

  // if (called && loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  useEffect(() => {
    getDataPoints({ variables: { start: "now" } });
  }, []);

  if (data) {
    console.log(data);
  }

  return (
    <Viewer>
      <Chart />
      <NavButtons />
      <DateSelection />
      <AxisSelection />
    </Viewer>
  );
};

export default TrendViewer;
