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
      variables: { start: "startDefault", end: "endDefault" },
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
    <div>
      <h1>Trend Viewer</h1>
      <p></p>
    </div>
  );
};

export default TrendViewer;
