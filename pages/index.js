import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { App } from "../components";

const Home = ({ data, host, protocol }) => {
  const uri = `${protocol}://${host}/api/graphql-data`;

  const client = new ApolloClient({
    uri,
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const host = req?.headers?.host;

  const protocol = host === "localhost:3000" ? "http" : "https";

  return {
    host,
    protocol,
  };
};

export default Home;
