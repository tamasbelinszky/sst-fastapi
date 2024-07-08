import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        runtime: "python3.11",
        container: {
          file: "app/app/Dockerfile",
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
          handler: "app/app/main.handler",
        },
      },
      "GET /docs": "app/app/main.handler",
      "GET /openapi.json": "app/app/main.handler",
      "GET /hello": "app/app/functions/hello.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
