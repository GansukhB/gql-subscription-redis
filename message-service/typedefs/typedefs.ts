import { gql } from "apollo-server";

export const typedefs = gql`
  type HelloType {
    message: String
  }
  type Query {
    hello(name: String!): HelloType
  }
`;
