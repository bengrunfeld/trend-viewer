import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { TrendViewer, TitleBar } from "../";
import { PageLayout } from "./App.styles";

interface DataPoints {
  id: string;
  timestamp: string;
  value1: string;
  value2: string;
  value3: string;
}

const GET_DATA_POINTS = gql`
  query DataPoints {
    points {
      id
      timestamp
      value1
      value2
      value3
    }
  }
`;

const App = () => {
  const [getDataPoints, { called, loading, error, data }] = useLazyQuery<
    DataPoints
  >(GET_DATA_POINTS);

  useEffect(() => {
    getDataPoints();
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
