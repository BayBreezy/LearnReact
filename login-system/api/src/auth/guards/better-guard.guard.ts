import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { fromNodeHeaders } from "better-auth/node";
import { IS_PUBLIC_ROUTE_KEY } from "../../common/constants";
import { auth } from "../../lib/auth";

@Injectable()
export class BetterGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const req: Request = context.switchToHttp().getRequest<Request>();
    // If the route is marked as public, allow access
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_ROUTE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers as any),
    });
    if (session && session.user) {
      return true;
    }
    return false;
  }
}
