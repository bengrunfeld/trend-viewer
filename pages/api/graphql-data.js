import { promises as fs } from "fs";

import { ApolloServer, gql } from "apollo-server-micro";
import parse from "csv-parse/lib/sync";

const getCsvData = async () => {
  const content = await fs.readFile("./data/ts-data.csv");
  const records = parse(content);

  const output = [];

  return records.map((item, i) => {
    if (i === 0) return;

    return {
      id: item[0],
      timestamp: item[1],
      value1: item[2],
      value2: item[3],
      value3: item[4],
    };
  });
};

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
    points: async (parent, args) => {
      console.log(args);
      console.log("------>>>>>");

      const data = await getCsvData();

      return data;
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
