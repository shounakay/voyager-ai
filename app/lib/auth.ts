import { betterAuth } from "better-auth";
import { PrismaClient } from "../generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { createAuthMiddleware } from "better-auth/api";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prismaClient = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prismaClient, { provider: "postgresql" }),
  appName: "Voyager-AI",
  advanced: {
    cookiePrefix: "voyager_ai",
    cookies: {},
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log("Send verification email", { user, url, token }, { request });
      return;
    },
    beforeEmailVerification: async (user, request) => {
      console.log("Before email verification", { user }, { request });
      return;
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    maxPasswordLength: 14,
    minPasswordLength: 7,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      console.log("Auth Middleware - Before", { ctx });
      return;
    }),
    after: createAuthMiddleware(async (ctx) => {
      console.log("Auth Middleware - After", { ctx });
      return;
    }),
  },
});
export const {
  api: { getSession },
} = auth;
