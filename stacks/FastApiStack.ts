import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        runtime: "python3.12",
      },
      throttle: {
        rate: 10,
        burst: 10,
      },
    },
    routes: {
      "ANY /{proxy+}": {
        function: {
          handler: "packages/fastapi/app.handler",
        },
      },
      "GET /docs": "packages/fastapi/app.handler",
      "GET /openapi.json": "packages/fastapi/app.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
