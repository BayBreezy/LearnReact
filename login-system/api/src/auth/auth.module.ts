import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthController } from "./auth.controller";
import { BetterGuard } from "./guards";

@Module({
  controllers: [AuthController],
  providers: [{ provide: APP_GUARD, useClass: BetterGuard }],
})
export class AuthModule {}
