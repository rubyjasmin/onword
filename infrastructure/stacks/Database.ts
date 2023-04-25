import { Table } from "sst/constructs";

import type { StackContext } from "sst/constructs";

export function Database({ stack }: StackContext) {
  const datastore = new Table(stack, "Datastore", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  });

  const eventStore = new Table(stack, "Event", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  });

  return {
    datastore,
    eventStore,
  };
}
