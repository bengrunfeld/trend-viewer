import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { TrendViewer, TitleBar } from "../";
import { PageLayout } from "./App.styles";

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

const App = () => {
  const [getDataPoints, { called, loading, error, data }] = useLazyQuery(
    GET_DATA_POINTS,
    {
      variables: { start: "false", end: "false" },
    }
  );

  useEffect(() => {
    getDataPoints({ variables: { start: "now" } });
  }, []);

  return (
    <PageLayout>
      <TitleBar />
      <TrendViewer
        data={data}
        loading={loading}
        called={called}
        error={error}
      />
    </PageLayout>
  );
};

export default App;
