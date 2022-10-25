import { PubSub } from "graphql-subscriptions";

export default {
  message: async (_: any, params: any) => {
    return {
      message: "Hello  " + params.name,
    };
  },
};
