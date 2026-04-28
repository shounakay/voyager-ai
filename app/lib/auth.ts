import { betterAuth } from "better-auth";
import { PrismaClient } from "../generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prismaClient = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prismaClient, { provider: "postgresql" }),
  appName: "Voyager-AI",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    maxPasswordLength: 14,
    minPasswordLength: 7,
    autoSignIn: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
