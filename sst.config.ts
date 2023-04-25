import type { App } from "sst/constructs";
import type { SSTConfig } from "sst";

import { Database, RestApi, Web } from "./infrastructure";

export default {
  config() {
    return {
      name: "onword-platform",
      region: "us-east-1",
    };
  },

  stacks(app: App) {
    app.stack(Database).stack(RestApi).stack(Web);
  },
} satisfies SSTConfig;
