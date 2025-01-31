import { All, Controller, Get, Req, Res } from "@nestjs/common";
import { toNodeHandler } from "better-auth/node";
import { Request, Response } from "express";
import { CurrentUser } from "../common/decorators/current-user.decorator";
import { PublicRoute } from "../common/decorators/public-route.decorator";
import { auth } from "../lib/auth";

@Controller()
export class AuthController {
  // express v5 requires something behind the "*" in the decorator
  @All("api/auth/*any")
  @PublicRoute()
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    return toNodeHandler(auth)(req, res);
  }

  @Get("auth/secret")
  getSecret(@CurrentUser() user: typeof auth.$Infer.Session) {
    return user;
  }
}
