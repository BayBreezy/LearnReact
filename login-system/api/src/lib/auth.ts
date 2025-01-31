import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { bearer, openAPI } from "better-auth/plugins";

const prisma = new PrismaClient();
export const auth = betterAuth({
  plugins: [openAPI({ path: "/docs" }), bearer()],
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    cookiePrefix: "learn-react-login-system",
  },
  trustedOrigins: process.env.ORIGIN?.split(",") || [],
  appName: "Learn React - Login System",
  emailAndPassword: { enabled: true, autoSignIn: true },
});
