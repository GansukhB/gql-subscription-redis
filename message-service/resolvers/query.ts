export default {
  hello: async (_: any, params: any) => {
    return {
      message: "Hello " + params.name,
    };
  },
};
