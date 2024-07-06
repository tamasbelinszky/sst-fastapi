import { SSTConfig } from "sst";
import { API } from "./stacks/FastApiStack";

export default {
  config(_input) {
    return {
      name: "sst-fastapi",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
