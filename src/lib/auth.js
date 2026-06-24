import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"; // অথবা তোমার ডাটাবেস অ্যাডাপ্টার
import { prisma } from "./prisma"; // তোমার prisma client ইমপোর্ট করো

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb", 
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});