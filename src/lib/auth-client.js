import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "http://localhost:5000" // শুধু এইটুকুই থাকবে
});

export const { signIn, signUp, signOut, useSession } = authClient;