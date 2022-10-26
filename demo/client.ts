import { createClient } from "graphql-ws";
import WebSocket from "ws";

const client = createClient({
  url: "ws://localhost:4000/graphql",
  webSocketImpl: WebSocket,
});

// query
(async () => {
  const result = await new Promise((resolve, reject) => {
    let result: any;
    client.subscribe(
      {
        query: "{ hello }",
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      }
    );
  });
  console.log(result);
  //expect(result).toEqual({ hello: "Hello World!" });
})();

// subscription
(async () => {
  const onNext = () => {
    /* handle incoming values */
  };

  let unsubscribe = () => {
    /* complete the subscription */
  };

  await new Promise((resolve, reject) => {
    let result: any;
    unsubscribe = client.subscribe(
      {
        query: "subscription { greetings }",
      },
      {
        next: onNext,
        error: reject,
        complete: () => resolve,
      }
    );
  });
  console.log(onNext);
  //expect(onNext).toBeCalledTimes(5); // we say "Hi" in 5 languages
})();
function expect(result: unknown) {
  throw new Error("Function not implemented.");
}
