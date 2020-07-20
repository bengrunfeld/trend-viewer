import { promises as fs } from "fs";
import path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

import { ApolloServer, gql } from "apollo-server-micro";
import parse from "csv-parse/lib/sync";

const getCsvData = async () => {
  const content = await fs.readFile(path.resolve("./public/ts-data.csv"));
  const records = parse(content);

  const data = records.map((item, i) => {
    if (i === 0) return;

    return {
      id: item[0],
      timestamp: item[1],
      value1: item[2],
      value2: item[3],
      value3: item[4],
    };
  });

  return data.slice(1);
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
    points: [Point]
  }
`;

interface Point {
  id: string;
  timestamp: string;
  value1: string;
  value2: string;
  value3: string;
}

const resolvers = {
  Query: {
    points: async (parent, args): Promise<Array<Point>> => await getCsvData(),
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
