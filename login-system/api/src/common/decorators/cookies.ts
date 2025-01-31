import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

/**
 * Returns the cookies from the request object.
 *
 * An optional key can be passed to get a specific cookie value.
 */
export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  return data ? request.cookies?.[data] || {} : request.cookies || {};
});

/**
 * Returns the signed cookies from the request object.
 *
 * An optional key can be passed to get a specific signed cookie value.
 */
export const SignedCookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  return data ? request.signedCookies?.[data] || {} : request.signedCookies || {};
});
