import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

// Lambda handler that returns a welcome message that introduces Onword to the user
export const welcomeHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Welcome to Onword!",
    }),
  };
};
