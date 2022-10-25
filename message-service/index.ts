import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";

import queries from "./resolvers/query";
import { typedefs } from "./typedefs/typedefs";

dotenv.config();

const typeDefs = [typedefs];

const resolvers = {
  Query: queries,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app: Express = express();
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
