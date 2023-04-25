import { Api } from "sst/constructs";

import type { StackContext } from "sst/constructs";

export function RestApi({ stack }: StackContext) {
  const api = new Api(stack, "ActionItemApi", {
    routes: {
      "GET /welcome": {
        function: {
          handler: "apps/onword-api/src/index.welcomeHandler",
        },
      },
    },
  });

  stack.addOutputs({
    ApiUrl: api.url,
  });

  return {
    api,
  };
}
