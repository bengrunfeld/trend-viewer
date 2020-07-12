import { ApolloServer, gql } from "apollo-server-micro";

// 0,2020-04-01 0:00:40,31.58865,0.1,0
// 1,2020-04-01 0:01:40,31.57181667,0.1392339101,0
// 2,2020-04-01 0:02:40,32.41963333,0.2058788801,1

const points = [
  {
    id: "0",
    timestamp: "2020-04-01 0:00:40",
    value1: "31.58865",
    value2: "0.1",
    value3: "0",
  },
  {
    id: "1",
    timestamp: "2020-04-01 0:01:40",
    value1: "31.57181667",
    value2: "0.1392339101",
    value3: "0",
  },
  {
    id: "2",
    timestamp: "2020-04-01 0:02:40",
    value1: "31.41963333",
    value2: "0.2058788801",
    value3: "1",
  },
];

const typeDefs = gql`
  type Point {
    id: ID
    timestamp: String
    value1: String
    value2: String
    value3: String
  }

  type Query {
    points(startDateTime: String, endDateTime: String): [Point]
  }
`;

const resolvers = {
  Query: {
    points: (parent, args) => {
      console.log(args);
      return points;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
