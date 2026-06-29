// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma"; // অথবা তোমার ডাটাবেস অ্যাডাপ্টার
// import { prisma } from "./prisma"; // তোমার prisma client ইমপোর্ট করো

// export const auth = betterAuth({
//     database: prismaAdapter(prisma, {
//         provider: "mongodb", 
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
//     socialProviders: {
//         google: {
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         },
//     },
// });



// NexusIdeas-Client/src/lib/auth.js
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5000",
});

// এগুলো এক্সপোর্ট করে দাও যাতে অন্য কম্পোনেন্টে এরর না দেয়
export const { signIn, signUp, signOut, useSession } = authClient;