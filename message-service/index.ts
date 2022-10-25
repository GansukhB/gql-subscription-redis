// import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server";
import { WebSocketServer } from "ws"; // yarn add ws
import { useServer } from "graphql-ws/lib/use/ws";
import dotenv from "dotenv";

import queries from "./resolvers/query";
import subscriptions from "./resolvers/subscriptions";
import typedefs from "./typeDefs";

dotenv.config();

const typeDefs = [typedefs];

const resolvers = {
  Query: queries,
  Subscription: subscriptions,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// const app: Express = express();
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
