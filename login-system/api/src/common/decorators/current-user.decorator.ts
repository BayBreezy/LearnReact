import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { fromNodeHeaders } from "better-auth/node";
import { get } from "es-toolkit/compat";
import { Request } from "express";
import { auth } from "../../lib/auth";

/**
 * Custom decorator to get the current user from the request object
 */
export const CurrentUser = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    // get the logged in user's session
    const response = await auth.api.getSession({
      headers: fromNodeHeaders(context.switchToHttp().getRequest<Request>().headers),
    });
    // if there is no response, return null
    if (!response) return null;
    // get the requested data from the response or return the entire response
    return get(response, data as any, response);
  }
);
