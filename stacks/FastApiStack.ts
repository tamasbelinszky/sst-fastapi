import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        runtime: "python3.11",
        container: {
          file: "Dockerfile",
        },
      },
      throttle: {
        rate: 10,
        burst: 10,
      },
    },
    routes: {
      "ANY /{proxy+}": {
        function: {
          handler: "app/main.handler",
        },
      },
      "GET /docs": "app/main.handler",
      "GET /openapi.json": "app/main.handler",
      "GET /hello": "app/functions/hello.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
